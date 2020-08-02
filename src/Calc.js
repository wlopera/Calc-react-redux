import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import { operation, change } from "./actions";

class Calc extends Component {
  operation = (value) => {
    this.props.operation(value);
  };

  // Llamando el dispacth con el uso de actions
  change = (event) => {
    this.props.change(event);
  };

  // Version llamando directamente el dispatch
  // change = (event) => {
  //   this.props.dispatch({ type: event.target.name.toUpperCase(), item: event.target.value });
  // };

  render() {
    return (
      <div className="calc">
        <h3>Números Enteros</h3>
        <Button.Group>
          <button onClick={() => this.operation("SUMAR")}>+</button>
          <button onClick={() => this.operation("RESTAR")}>-</button>
          <button onClick={() => this.operation("MULTIPLICAR")}>*</button>
          <button onClick={() => this.operation("DIVIDIR")}>/</button>
        </Button.Group>
        <strong>
          <p className="alignL">Operación: {this.props.product}</p>
        </strong>
        <Table basic="very" celled collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <input
                  value={this.props.valueX}
                  className="alignR"
                  onChange={(event) => this.change(event)}
                  name="valueX"
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <input
                  value={this.props.valueY}
                  className="alignR"
                  onChange={(event) => this.change(event)}
                  name="valueY"
                />
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <hr color="blue" />
              </Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.Cell>
                <strong>
                  <p className="alignR">{this.props.total}</p>
                </strong>
              </Table.Cell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    valueX: state.valueX,
    valueY: state.valueY,
    total: state.total,
    product: state.product,
  };
};

const mapDispatchToprops = {
  operation,
  change,
};

export default connect(mapStateToProps, mapDispatchToprops)(Calc);
//export default connect(mapStateToProps)(Calc);
