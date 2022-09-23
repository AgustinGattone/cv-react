export default function Skills() {
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6>
              <strong>HABILIDADES PROFESIONALES</strong>
            </h6>
            <div className="row mt-top">
              <div className="col s6">
                <p>HTML</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: '90%' }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>CSS</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: '95%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>JAVASCRIPT</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: '70%' }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>PYTHON</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: '80%' }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s6">
                <p>SQL</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: '50%' }}
                  ></div>
                </div>
              </div>
              <div className="col s6">
                <p>REACT</p>
                <div className="progress grey lighten-1">
                  <div
                    className="determinate blue"
                    style={{ width: '55%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }