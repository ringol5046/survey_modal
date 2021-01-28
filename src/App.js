import React, { useState } from 'react'
import Modal from './modal'
import './App.css'

const category = ['Our Website', 'Our Product', 'Our Retail Locations', 'Customer Service', 'Cole Haan, Generally']
const forms = {
  'Our Website': {
    items: [
      {
        desc: 'What was your goal for todays visit to ColeHaan.com?',
        type: 'dropDown',
        key: 'website_goal',
        options: ['Browser New Arrivals', 'Find a specific style', 'Compare Product', 'Browser sales items']
      },
      {
        desc: 'How easy was it to accomplish that goal?',
        type: 'radio',
        group: 'difficult',
        key: 'website_usability',
        options: ['Very Difficult', 'Difficult', 'Not Difficult nor Easy', 'Easy', 'Very Easy']
      },
      {
        desc: 'Please share you feedback.',
        type: 'textArea',
        key: 'feedback'
      }
    ]
  },
  'Our Product': {
    items: [
      {
        desc: 'What category would you like to leave feedback about',
        type: 'dropDown',
        key: 'product_goal',
        options: ['Browser New Arrivals', 'Find a specific style', 'Compare Product', 'Browser sales items']
      },
      {
        desc: 'Tell use what you think.',
        type: 'textArea',
        key: 'feedback'
      }
    ]
  },
  'Our Retail Locations': {
    items: [
      {
        desc: 'Which store location would you like to leave feedback about?',
        type: 'textArea',
        key: 'store_location'
      },
      {
        desc: 'Tell us what you think.',
        type: 'textArea',
        key: 'feedback'
      }
    ]
  },
  'Customer Service': {
    items: [
      {
        desc: 'How did you contact customer service?',
        type: 'dropDown',
        key: 'service_goal',
        options: ['Phone', 'Email', 'Chat', 'Social Media', 'Other']
      },
      {
        desc: 'Tell us what you think.',
        type: 'textArea',
        key: 'feedback'
      },
      {
        desc: 'How would you rate the service?',
        type: 'radio',
        group: 'rate',
        key: 'service_rate',
        options: ['1 - Not Satisfied', '2 - Somewhat Satisfied', '3 - Satisfied', '4 - Very Satisfied']
      },
    ]
  },
  'Cole Haan, Generally': {
    items: [
      {
        desc: 'Tell us what you think',
        type: 'textArea',
        key: 'feedback'
      }
    ]
  },
}

function renderDropdown({ desc, key, options }, onInputChange, feedback) {
  return (
    <div className='feedback-item'>
      <div className='label'>{desc}</div>
      <select 
        onChange={onInputChange} 
        data-key={key}
        value={feedback[key] ? feedback[key] : ''}
      >
        <option>Choose..</option>
        {options && options.map((item, index) => <option key={index} value={item}>{item}</option>)}
      </select>
    </div>
  )
}

function renderTextarea({ desc, key }, onInputChange, feedback) {
  return (
    <div className='feedback-item'>
      <div className='label'>{desc}</div>
      <textarea 
        maxLength={1000} 
        onChange={onInputChange} 
        data-key={key}
        rows={5}
        value={feedback[key] ? feedback[key] : ''}
      />
      <div className='textarea-counter'>{`${feedback[key] ? 1000 - feedback[key].length : 1000} characters left`}</div>
    </div>
  )
}

function renderRadioButton({desc, key, options, group}, onInputChange, feedback) {
  return (
    <div className='feedback-item'>
      <div className='label'>{desc}</div>
      <div
        className='radio-option-container'
        onChange={onInputChange} 
        data-key={key}
      >
        {
          options.map((item, idx) => 
            <div key={idx} className='option-item'>
              <input 
                value={item} 
                key={idx} 
                type='radio' 
                name={group} 
                checked={feedback[key] && feedback[key] === item}
              />
              <label htmlFor='rate'>{item}</label>
            </div>
          )
        }
      </div>
    </div>
  )
}

function renderForm(component, onInputChange, feedback) {  
  if(component.type === 'dropDown') {
    return renderDropdown(component, onInputChange, feedback)
  }
  else if(component.type === 'radio') {
    return renderRadioButton(component, onInputChange, feedback)
  }
  else {
    return renderTextarea(component, onInputChange, feedback)
  }
}

function App() {
  const [feedbackModalVisible, setFeedbackModalVisible] = useState(false)
  const [feedbackStage, setFeedbackStage] = useState(1)
  const [feedbackForm, setFeedbackForm] = useState('')
  const [feedback, setFeedback] = useState({ rate: null })

  const resetState = () => {
    setFeedbackStage(1)
    setFeedbackForm('')
    setFeedback({ rate: null })
  }

  const onClose = () => {
    resetState()
    setFeedbackModalVisible(false)
  }
  const onOpen = () => setFeedbackModalVisible(true)

  const onInputChange = e => {
    let key = e.currentTarget.getAttribute('data-key')
    if(key === 'category') {
      setFeedbackForm(e.target.value)
    }
    let feedbackObj = {...feedback}
    feedbackObj[key] = e.target.value
    setFeedback(feedbackObj)
  }

  const onNextClick = () => setFeedbackStage(2)
  const onPreviousClick = () => resetState()

  return (
    <div className="App">
      <div className='feedback-tab' onClick={onOpen}>
        Feedback
      </div>
      <Modal
        title={'COLE HAAN'}
        visible={feedbackModalVisible}
        onClose={onClose}
        >
          <div className='required-label'>
            <b>*</b>Required fields
          </div>
          {
            feedbackStage === 1 && (
            <div className='content'>
              <div className='feedback-item'>
                <div className='label'>How likely are you to recommend Cole Haan to a friend or colleague? <b>*</b></div>
                <div className='feedback-rate-container'>
                  {
                    [1,2,3,4,5,6,7,8,9,10].map((item, idx) => (
                      <div 
                        key={idx} 
                        className={`rate-buttom ${ feedback['rate'] && feedback['rate'] === item ? 'active' : ''}`} 
                        onClick={() => setFeedback({ ...feedback, rate: item })}
                      >
                        <span>{item}</span>
                      </div>
                    ))
                  }
                </div>
                <div className='rating-label'>
                  <div>Not at all likely</div>
                  <div>Extremely likely</div>
                </div>
              </div>
              <div className='feedback-item'>
                <div className='label'>Please choose a category you would like to leave feedback about.</div>
                <select 
                  onChange={onInputChange} 
                  data-key='category'
                  className='category-select'
                  value={feedback['category'] ? feedback['category'] : ''}
                >
                  <option value={1}>Choose..</option>
                  {category.map((item, idx) => <option value={item} key={idx}>{item}</option>)}
                </select>
              </div>
            </div>
            )
          }
          {
            feedbackStage === 2 && (
              <div>
                {
                  feedbackForm === 'Our Website' && 
                  <div>
                    {forms[feedbackForm].items.map((componet, index) => {
                      return renderForm(componet, onInputChange, feedback)
                    })}
                  </div>
                }
                {
                  feedbackForm === 'Our Product' && (
                    <div>
                      {forms[feedbackForm].items.map((componet, index) => {
                        return renderForm(componet, onInputChange, feedback)
                      })}
                    </div>
                  )
                }
                {
                  feedbackForm === 'Our Retail Locations' && (
                  <div>
                    {forms[feedbackForm].items.map((componet, index) => {
                      return renderForm(componet, onInputChange, feedback)
                    })}
                  </div>
                  )
                }
                {
                  feedbackForm === 'Customer Service' && (
                  <div>
                    {forms[feedbackForm].items.map((componet, index) => {
                      return renderForm(componet, onInputChange, feedback)
                    })}
                  </div>
                  )
                }
                {
                  feedbackForm === 'Cole Haan, Generally' && (
                  <div>
                    {forms[feedbackForm].items.map((componet, index) => {
                      return renderForm(componet, onInputChange, feedback)
                    })}
                  </div>
                  )
                }
              </div>
            )
          }
          {
            feedbackStage === 2 && (
              <div className='feedback-item email'>
                <div className='label'>Email (optional, will only be used for customer service purpose)</div>
                <input placeholder='Email' onChange={onInputChange} data-key='email'/>
              </div>
            )
          }
          {
            feedbackStage === 3 && <div>{JSON.stringify(feedback)}</div>
          }
          { feedbackStage === 2 && <button onClick={onPreviousClick}>Previous</button>}
          {
            feedbackStage === 1 ? (
              <button onClick={onNextClick} disabled={feedbackForm === ''}>Next</button>) 
              : (
                feedbackStage === 2 ?
              <button onClick={() => setFeedbackStage(3)}>Submit</button> : null)
          }
      </Modal>
    </div>
  )
}

export default App;
