import * as go from 'gojs';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {SK} from 'sk-js';
import Comp from '../Comp';
import Reacts from '../Reacts';

const uuidv4 = require('uuid/v4');

//a.ax = d[u.Da("7eba17a4ca3b1a8346")][u.Da("78a118b7")](d, u.wl, 4, 4);
//a.ax= function(){return true;};
export default class SKGoJSDag extends Comp {
  static SK_COMP_NAME = 'SKGoJSDag';
  static defaultProps = SK.extends(true, {}, Comp.defaultProps, {
    compTag: Reacts.TAG.div,
    createDiagramFunc: (go, diagramDomId) => {
      return go.GraphObject.make(go.Diagram, diagramDomId, {
        allowCopy: false,
        allowHorizontalScroll: true,
        allowSelect: true,
        allowVerticalScroll: true,
        allowZoom: true,
        // autoScale: go.Diagram.Uniform,
        // autoScale: go.Diagram.UniformToFill,
        contentAlignment: go.Spot.TopCenter,
        initialAutoScale: go.Diagram.UniformToFill,
        initialContentAlignment: go.Spot.TopCenter,
        isReadOnly: false,
        layout: go.GraphObject.make(go.TreeLayout, {
          angle: 90,
          arrangement: go.TreeLayout.ArrangementVertical,
          treeStyle: go.TreeLayout.StyleLayered,
          layerStyle: go.TreeLayout.LayerUniform
        }),
        validCycle: go.Diagram.CycleNotDirected
      });
    },
    keyProp: 'id'
  });
  static propTypes = SK.extends(true, {}, Comp.propTypes, {
    createDiagramFunc: PropTypes.func.isRequired,
    diagramContextMenus: PropTypes.array,
    layoutStyle: PropTypes.object.isRequired,
    linkDataArrayId: PropTypes.string.isRequired,
    nodeContextMenus: PropTypes.array,
    nodeDataArrayId: PropTypes.string.isRequired,
    paletteNodeModels: PropTypes.array.isRequired,
    rootDivCls: PropTypes.string,
    keyProp: PropTypes.string.isRequired
  });

  constructor(...args) {
    super(...args);
    this.SK_COMP_NAME = SKGoJSDag.SK_COMP_NAME;
    const _uniqueId = _.uniqueId();
    this.diagramDomId = `${this.SK_COMP_NAME}_${_uniqueId}_diagramDomId`;
    this.overviewDomId = `${this.SK_COMP_NAME}_${_uniqueId}_overviewDomId`;
    this.paletteDomId = `${this.SK_COMP_NAME}_${_uniqueId}_paletteDomId`;
    this.nodeSelectionHandler = node => {
      if (node.data[this.props.keyProp]) {
        // node.data.mouseSelected = SK.s4n(node.data.mouseSelected) + (node.isSelected ? 10 : -10);
        this.diagram.model.commit(m => {
          m.set(node.data, 'mouseSelected', SK.s4n(node.data.mouseSelected) + (node.isSelected ? 10 : -10));
        }, `selectionChanged ${node}`);

        if (this.getModelId()) {
          let selectedKeys = this.m2n();
          if (node.isSelected) {
            this.n2m([...selectedKeys, node.key]);
          } else {
            const nodeIndexToRemove = selectedKeys.findIndex(key => key === node.key);
            if (nodeIndexToRemove === -1) {
              return;
            }
            this.n2m([...selectedKeys.slice(0, nodeIndexToRemove), ...selectedKeys.slice(nodeIndexToRemove + 1)]);
          }
        }
      }
    };
  }

  componentDidMount() {
    super.componentDidMount();

    this.diagram = this.props.createDiagramFunc(go, this.diagramDomId);
    if (this.props.diagramContextMenus) {
      this.diagram.contextMenu = go.GraphObject.make('ContextMenu',
        this.props.diagramContextMenus.map((menuCfg) => {
          return go.GraphObject.make('ContextMenuButton', {click: menuCfg.click}, go.GraphObject.make(go.TextBlock, {margin: 6, alignment: go.Spot.Left, text: menuCfg.text}));
        })
      );
    }

    this.diagram.nodeTemplate = go.GraphObject.make(go.Node, 'Spot', {
        mouseEnter: (e, node) => {
          if (node.data[this.props.keyProp]) {
            this.diagram.model.commit(m => {
              m.set(node.data, 'mouseSelected', SK.s4n(node.data.mouseSelected) + 1);
            }, `mouseEnter ${node}`);
          }
        },
        mouseLeave: (e, node) => {
          if (node.data[this.props.keyProp]) {
            this.diagram.model.commit(m => {
              m.set(node.data, 'mouseSelected', SK.s4n(node.data.mouseSelected) - 1);
            }, `mouseLeave ${node}`);
          }
        },
        // locationObjectName: "BODY",
        selectionAdorned: false,
        selectionChanged: this.nodeSelectionHandler
      },
      go.GraphObject.make(go.Panel, 'Auto',
        // { name: "BODY" },
        go.GraphObject.make(go.Shape, 'RoundedRectangle', {fill: 'rgba(255, 255, 255, 0.5)', stroke: 'rgba(215, 57, 37, 0.5)', strokeWidth: 1},
          new go.Binding('fill', 'mouseSelected', (v, n) => {
            return SK.s4n(v) >= 1 || n.isSelected
              ? 'rgb(255, 255, 255)'
              : 'rgba(255, 255, 255, 0.5)';
          }),
          new go.Binding('stroke', 'mouseSelected', (v, n) => {
            return SK.s4n(v) >= 10 || n.isSelected
              ? 'rgb(215, 57, 37)'
              : 'rgba(215, 57, 37, 0.5)';
          }),
          // new go.Binding("strokeWidth", "mouseSelected", (v, n) => {
          //   return SK.s4n(v) >= 10 || n.isSelected ? 2 : 1;
          // }),
        ),
        go.GraphObject.make(go.Panel, 'Horizontal',
          go.GraphObject.make(go.Picture, {maxSize: new go.Size(16, 16), width: 16},
            new go.Binding('source', 'type', (v, n) => {
              return `/svg/${v}.svg`;
            })
          ),
          go.GraphObject.make(go.TextBlock, {margin: 6, editable: true},
            // new go.Binding("text")
            new go.Binding('text').makeTwoWay()
          ),
          go.GraphObject.make(go.Picture, {maxSize: new go.Size(16, 16), width: 16},
            new go.Binding('source', 'status', (v, n) => {
              return `/svg/${v}.svg`;
            })
          )
        )
      ),
      // output port
      go.GraphObject.make(go.Panel, 'Auto', {alignment: go.Spot.Bottom, portId: 'from', fromLinkable: true, cursor: 'pointer'},
        go.GraphObject.make(go.Shape, 'Circle', {width: 6, height: 6, fill: 'white', stroke: 'gray'})),
      // input port
      go.GraphObject.make(go.Panel, 'Auto', {alignment: go.Spot.Top, portId: 'to', toLinkable: true},
        go.GraphObject.make(go.Shape, 'Circle', {width: 6, height: 6, fill: 'white', stroke: 'gray'})),
      (this.props.nodeContextMenus ? {
        contextMenu: go.GraphObject.make('ContextMenu',
          this.props.nodeContextMenus.map((menuCfg) => {
            return menuCfg.divider ? go.GraphObject.make(go.Shape, "LineH", {strokeWidth: 1, height: 1, stretch: go.GraphObject.Horizontal})
              : go.GraphObject.make('ContextMenuButton', {click: menuCfg.click}, go.GraphObject.make(go.TextBlock, {margin: 6, alignment: go.Spot.Left, text: menuCfg.text})
              );
          })
        )
      } : {})
    );
    this.diagram.linkTemplate = go.GraphObject.make(go.Link,
      {
        // adjusting: go.Link.Stretch,// None, End, Scale, or Stretch.
        // corner: 10,//when the curve is None, JumpGap, or JumpOver and the two line segments are orthogonal to each other.
        curve: go.Link.Bezier, // None, Bezier, JumpGap, or JumpOver.
        // curviness: 100,//The default value is NaN -- the actual curviness is computed based on how many links connect the same pair of ports.
        fromEndSegmentLength: 30,
        // relinkableFrom: false,
        // relinkableTo: false,
        // routing: go.Link.AvoidsNodes,
        // smoothness: 0.1,//when routing is Orthogonal and curve is Bezier.
        toEndSegmentLength: 30
      },
      go.GraphObject.make(go.Shape, {stroke: '#787878', strokeWidth: 1}),
      go.GraphObject.make(go.Shape, {toArrow: 'Standard', fill: '#787878', stroke: null, strokeWidth: 1})
    );
    this.palette = go.GraphObject.make(go.Palette, this.paletteDomId, {
      allowCopy: true,
      allowHorizontalScroll: true,
      allowSelect: true,
      allowVerticalScroll: true,
      allowZoom: false,
      // autoScale: go.Diagram.Uniform,
      autoScale: go.Diagram.UniformToFill,
      contentAlignment: go.Spot.TopCenter,
      initialContentAlignment: go.Spot.TopCenter,

      nodeTemplate: go.GraphObject.make(go.Node, 'Spot', {selectionAdorned: false, selectionChanged: this.nodeSelectionHandler},
        go.GraphObject.make(go.Panel, 'Auto',
          go.GraphObject.make(go.Shape, 'RoundedRectangle', {fill: 'rgba(255, 255, 255, 0.5)', stroke: 'rgba(215, 57, 37, 0.5)', strokeWidth: 1}),
          go.GraphObject.make(go.Panel, 'Horizontal', go.GraphObject.make(go.Picture, {maxSize: new go.Size(16, 16), width: 16},
            new go.Binding('source', 'type', (v, n) => {
              return `/svg/${v}.svg`;
            })
            ),
            go.GraphObject.make(go.TextBlock, {margin: 6, editable: true},
              new go.Binding("text")
            ),
            go.GraphObject.make(go.Picture, {maxSize: new go.Size(16, 16), width: 16},
              new go.Binding('source', 'status', (v, n) => {
                return `/svg/${v}.svg`;
              })
            )
          )
        )
      ),
      model: go.GraphObject.make(go.GraphLinksModel, {nodeKeyProperty: this.props.keyProp, nodeDataArray: this.props.paletteNodeModels})
    });
    this.overview = go.GraphObject.make(go.Overview, this.overviewDomId, {
      observed: this.diagram,
      contentAlignment: go.Spot.Center
    });
    this.diagram.toolManager.linkingTool.isValidLink = (fn, fp, tn, tp) => {
      return (
        this.diagram.toolManager.linkingTool.isValidCycle(fn, tn) &&
        this.diagram.model.linkDataArray.find(ele => {
          return ele.from === fn.data[this.props.keyProp] && ele.to === tn.data[this.props.keyProp];
        }) === undefined
      );
    };
    this.diagram.model = go.GraphObject.make(go.GraphLinksModel, {
      linkDataArray: this.skModel().skVal(this.props.linkDataArrayId),
      nodeKeyProperty: this.props.keyProp,
      nodeDataArray: this.skModel().skVal(this.props.nodeDataArrayId)
    });
    this.diagram.model.copiesKey = false;
    this.diagram.model.makeUniqueKeyFunction = (model, objectData) => {
      return uuidv4();
    };
    //https://gojs.net/latest/intro/legends.html#StaticParts
    //layerName: Grid -> Background -> XXX -> Foreground -> Adornment -> Tool
    this.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(this.diagram.div.offsetWidth - 40, this.diagram.div.offsetHeight - 160);
        }
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            this.diagram.layout.invalidateLayout();
          }
        },
        go.GraphObject.make(go.TextBlock, '㊣')
      )
      )
    );
    this.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(this.diagram.div.offsetWidth - 40, this.diagram.div.offsetHeight - 130);
        }
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            this.diagram.zoomToFit();
          }
        },
        go.GraphObject.make(go.TextBlock, '▣')
      )
      )
    );
    this.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(this.diagram.div.offsetWidth - 40, this.diagram.div.offsetHeight - 100);
        }
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            this.diagram.commandHandler.increaseZoom();
          }
        },
        go.GraphObject.make(go.TextBlock, '+')
      )
      )
    );
    this.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(this.diagram.div.offsetWidth - 40, this.diagram.div.offsetHeight - 70);
        }
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            this.diagram.commandHandler.decreaseZoom();
          }
        },
        go.GraphObject.make(go.TextBlock, '-')
      )
      )
    );
    this.diagram.add(go.GraphObject.make(go.Part, {
        layerName: 'Tool', _viewPosition: () => {
          return new go.Point(this.diagram.div.offsetWidth - 40, this.diagram.div.offsetHeight - 40);
        }
      },
      go.GraphObject.make('Button', {
          desiredSize: new go.Size(25, 25), click: () => {
            this.diagram.makeImageData({
              background: 'white',
              returnType: 'blob',
              scale: 1,
              callback: blob => {
                let url = window.URL.createObjectURL(blob);
                let filename = 'sql.png';

                var a = document.createElement('a');
                a.style = 'display: none';
                a.href = url;
                a.download = filename;

                // IE 11
                if (window.navigator.msSaveBlob !== undefined) {
                  window.navigator.msSaveBlob(blob, filename);
                  return;
                }

                document.body.appendChild(a);
                requestAnimationFrame(function () {
                  a.click();
                  window.URL.revokeObjectURL(url);
                  document.body.removeChild(a);
                });
              }
            });
          }
        },
        go.GraphObject.make(go.TextBlock, '↓')
      )
      )
    );
    this.diagram.addDiagramListener('ViewportBoundsChanged', e => {
      e.diagram.commit(function (dia) {
        dia.parts.each(function (part) {
          if (part._viewPosition) {
            part.position = dia.transformViewToDoc(part._viewPosition());
            part.scale = 1 / dia.scale;
          }
        });
      }, 'fix Parts');
    });
  }

  componentDidUpdate() {
    super.componentDidUpdate();
    this.diagram.startTransaction();
    this.diagram.updateAllRelationshipsFromData();
    this.diagram.updateAllTargetBindings();
    this.diagram.commitTransaction('updated');
  }

  componentWillUnmount() {
    this.diagram.clear();
  }

  render() {
    const {compTag: CompTag, layoutStyle, rootDivCls} = this.props;

    return (
      <CompTag className={rootDivCls} style={{display: 'flex', flexFlow: 'row'}}>
        <div style={{display: 'flex', flexFlow: 'column', width: layoutStyle.leftWidth}}>
          <div id={this.paletteDomId} style={{backgroundColor: layoutStyle.backgroundColor, flex: 'auto'}}/>
          <div style={{height: '1px'}}/>
          <div id={this.overviewDomId} style={{backgroundColor: layoutStyle.backgroundColor, height: layoutStyle.leftWidth}}/>
        </div>
        <div style={{width: '1px'}}/>
        <div id={this.diagramDomId} style={{backgroundColor: layoutStyle.backgroundColor, flex: 'auto'}}/>
      </CompTag>
    );
  }
}
