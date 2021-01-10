import React from "react";
import "../assets/styles.css";

const Home = () => {
  return (
    <main className="content">
      <section className="wrapper">
        <section className="wrapper__body">
          <form>
            <section className="row">
              <section className="label label--block">Anrede*</section>
              <section className="row--field">
                <section className="radio">
                  Herr
                  <input type="radio" name="anrede" />
                  <section className="radio--checkmark"></section>
                </section>
                <section className="radio">
                  Frau
                  <input type="radio" name="anrede" />
                  <section className="radio--checkmark"></section>
                </section>
             </section>
            </section>

            <section className="row">
              <section className="label">Vorname*</section>
              <section className="row--field">
                <section className="row--input">
                  <input
                    className="input--style"
                    type="text"
                    name="vorname"
                    placeholder="Vorname"
                  />
                </section>
              </section>
            </section>


            <section className="row">
              <section className="label">Nachname*</section>
              <section className="row--field">
                <section className="row--input">
                  <input
                    className="input--style"
                    type="text"
                    name="nachname"
                    placeholder="Nachname"
                  />
                </section>
              </section>
            </section>


            <section className="row">
            <section className="label">Geburtsdatum*</section>
              <section className="row--field">
                <section className="row row-space">
                  <section className="row--small">
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="tt"
                        placeholder="TT"
                      />
                    </section>
                  </section>

                  <section className="row--small">
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="mm"
                        placeholder="MM"
                      />
                    </section>
                  </section>

                  <section className="row--small">
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="jjjj"
                        placeholder="JJJJ"
                      />
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section className="row">
              <section className="label label--main">StraBe/Nr.*</section>
              <section className="row--field">
                <section className="row row--refine">
                  <section className="row--large">
                    <section className="label label--desc">StraBe</section>
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="strabe"
                        placeholder="StraBe"
                      />
                    </section>
                  </section>
                  <section className="row--medium">
                    <section className="label label--desc">Nr</section>
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="nr"
                        placeholder="Nr"
                      />
                    </section>
                  </section>
                </section>
              </section>
            </section>

            <section className="row">
              <section className="label label--main">PLZ/Ort*</section>
              <section className="row--field">
                <section className="row row--refine">
                  <section className="row--medium">
                    <section className="label label--desc">PLZ</section>
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="plz"
                        placeholder="PLZ"
                      />
                    </section>
                  </section>
                  <section className="row--large">
                    <section className="label label--desc">Ort</section>
                    <section className="input--desc">
                      <input
                        className="input--style"
                        type="text"
                        name="ort"
                        placeholder="Ort"
                      />
                    </section>
                  </section>
                </section>
              </section>
            </section>
            
            <section>
              <button className="btn btn--primary" type="submit">
                Submit
              </button>
            </section>
          </form>
        </section>
      </section>
    </main>
  );
};

export default Home;
