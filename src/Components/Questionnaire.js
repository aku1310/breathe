import React, { Component } from "react";
import Questionjson from './Questionjson'

const Questions = Questionjson;
var score = 0;

class Questionnaire extends Component {

  constructor() {
    super();
    this.onChangeValue = this.onChangeValue.bind(this);
    this.handleScore = this.handleScore.bind(this);
  };

  onChangeValue(event) {
    score += event.target.value;
  };

  handleScore(e) {
    // e.preventDefault();
    console.log(score);
  }

  render() {
    return (
      <div id="questionnaire" className="page">
        <div className="inner-box">
          <p id="questionnaire-heading">Questionnaire</p>
          <hr />
          <form action="#symptom-identification">
            <div id="column-one">
              <div>
                <p>{Questions.anxiety[0].question}</p>
                <div onChange={this.onChangeValue}>
                  <input type="radio" id="not-at-all" name="ques-one" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-one" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-one" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-one" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[1].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-two" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-two" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-two" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-two" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[2].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-three" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-three" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-three" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-three" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[3].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-four" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-four" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-four" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-four" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[4].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-five" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-five" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-five" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-five" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[5].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-six" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-six" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-six" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-six" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.anxiety[6].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-seven" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-seven" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-seven" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-seven" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[0].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-eight" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-eight" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-eight" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-eight" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
            </div>
            <div id="column-two">
              <div>
                <p>{Questions.depression[1].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-nine" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-nine" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-nine" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-nine" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[2].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-ten" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-ten" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-ten" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-ten" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[3].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-eleven" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-eleven" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-eleven" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-eleven" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[4].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-twelve" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-twelve" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-twelve" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-twelve" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[5].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-thirteen" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-thirteen" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-thirteen" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-thirteen" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[6].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-fourteen" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-fourteen" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-fourteen" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-fourteen" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[7].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-fifteen" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-fifteen" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-fifteen" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-fifteen" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
              <div>
                <p>{Questions.depression[8].question}</p>
                <div>
                  <input type="radio" id="not-at-all" name="ques-sixteen" value="0"  />
                  <label htmlFor="not-at-all">Not at all</label>
  
                  <input type="radio" id="several-days" name="ques-sixteen" value="1"/>
                  <label htmlFor="several-days">Several Days</label>
  
                  <input type="radio" id="more-than-half-the-days" name="ques-sixteen" value="2"/>
                  <label htmlFor="more-than-half-the-days">More than Half the Days</label>
  
                  <input type="radio" id="nearly-everyday" name="ques-sixteen" value="3"/>
                  <label htmlFor="nearly-everyday">Nearly Everyday</label>
                </div>
              </div>
            </div>
           <button type="submit" id="submit-btn" value="result" onClick={this.handleScore}>SUBMIT</button>
            
          </form>
        </div>
      </div>
    );
  }
}

export default Questionnaire