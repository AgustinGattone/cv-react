export default function Skills() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>Idiomas</strong>
          </h6>
          <div className="row mt-top">
            <div className="col s6">
              <p>Español</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
            <div className="col s6">
              <p>Ingles</p>
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
              <p>Japones</p>
              <div className="progress grey lighten-1">
                <div
                  className="determinate blue"
                  style={{ width: '20%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}