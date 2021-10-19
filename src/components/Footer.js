import React from 'react'
import { ModalFooter } from 'react-bootstrap'

const Footer = () => {
    return (
      <div className="main-footer">
        <div className="container">
          <div className="rows">
            {/* Column1 */}
            <div className="col">
              <h4 className="headFooter">What is DFS</h4>
              {/* <ul className="list-unstyled">
                <li>342-420</li>
                <li>Bhubaneshwar</li>
                <li>123 Street South North</li>
              </ul> */}
            </div>
            {/* Column2 */}
            {/* <div className="col">
              <h4>Stuff</h4>
              <ul className="list-unstyled">
                <li>Dank Memes</li>
                <li>Other Stuff</li>
                <li>Good Stuff</li>
              </ul>
            </div> */}
            {/* Column3 */}
            {/* <div className="col">
              <h4>Well Another Column</h4>
              <ul className="list-unstyled">
                <li>Dank Memes</li>
                <li>Other Stuff</li>
                <li>Good Stuff</li>
              </ul>
            </div> */}
          </div>
          <hr className="line" />
          <div className="row">
            <p className="col-sm">
              Depth First Search (DFS) algorithm traverses a graph in a depthward motion and uses a stack to remember to get the next vertex to start a search, when a dead end occurs in any iteration.
            </p>
          </div>
        </div>
      </div>
    );
}
export default Footer;

