import React from 'react'

const Quiz = () => {
  return (
   <>
    {/* <main class="gl-content-body"> */}

            {/* <!-- 1st pages start --> */}
       <div class="qz-main-wrapper container-fluid">
    
    {/* <!-- Top Back Arrow Action --> */}
    <a href="#" class="qz-back-btn" aria-label="Go Back">←</a>

    {/* <!-- TOP PROFILE METRICS CARD PANEL --> */}
    <div class="qz-metrics-card">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h1 class="qz-course-title">Course Name: 1-Mastry Quiz</h1>
          <div class="qz-timer-row">
            <span class="qz-time-countdown">00:30</span>
            <div class="qz-toggle-pill">
              <button class="qz-pill-btn active">Show</button>
              <button class="qz-pill-btn">Hide</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-md-end mt-3 mt-md-0 d-flex flex-column align-items-md-end gap-2 justify-content-end">
          <div class="d-flex align-items-center gap-3 justify-content-md-end w-100">
            <button class="qz-flag-btn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M4 2v20h2v-8h10l1 2h6V6h-7l-1-2H4z"/></svg>
              Flag Question
            </button>
            <span class="qz-score-percentage">0%</span>
          </div>
          <div>
            <div class="qz-question-count">Question 1 of 5</div>
            <div class="qz-progress-container">
              <div class="qz-progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- MAIN QUIZ OPTIONS BLOCK QUESTION AREA --> */}
    <div class="qz-content-box">
      <h2 class="qz-question-text">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h2>
      
      <div class="row g-3">
        {/* <!-- Option A --> */}
        <div class="col-12 col-md-6">
          <div class="qz-option-card">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
        {/* <!-- Option B --> */}
        <div class="col-12 col-md-6">
          <div class="qz-option-card">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
        {/* <!-- Option C --> */}
        <div class="col-12 col-md-6">
          <div class="qz-option-card">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
        {/* <!-- Option D --> */}
        <div class="col-12 col-md-6">
          <div class="qz-option-card">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
      </div>
    </div>

    {/* <!-- SELF ASSESSMENT RATINGS MODULE --> */}
    <div class="qz-confidence-box">
      <h3 class="qz-confidence-title">How confident are you in your answer?</h3>
      <div class="qz-flex-badges">
        {/* <!-- Not Confident --> */}
        <div class="qz-mood-badge not-confident">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
          Not Confident
        </div>
        {/* <!-- Somewhat Confident --> */}
        <div class="qz-mood-badge somewhat-confident">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="15" y2="15"></line><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
          Somewhat Confident
        </div>
        {/* <!-- Highly Confident (Label corrected from Mockup duplicate string) --> */}
        <div class="qz-mood-badge highly-confident">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
          Highly Confident
        </div>
      </div>
    </div>

    {/* <!-- STICKY ACTION BAR CONTROL CONTROLLERS --> */}
    <footer class="qz-footer-controls">
      <a href="#" class="qz-nav-btn btn-prev">← &nbsp; Previous</a>
      <div class="d-flex gap-3">
        <a href="#" class="qz-nav-btn btn-skip">Skip Question</a>
        <button class="qz-nav-btn btn-next">Next &nbsp; →</button>
      </div>
    </footer>

  </div>
{/* <!-- 1st pages End --> */}
{/* <!-- 2nd pages start --> */}
<div class="qz-main-container container-fluid">
    
    <a href="#" class="qz-back-btn" aria-label="Go Back">←</a>

    <div class="qz-metrics-card">
      <div class="row align-items-center">
        <div class="col-12 col-md-6">
          <h1 class="qz-course-title">Course Name: 1-Mastry Quiz</h1>
          <div class="qz-timer-row">
            <span class="qz-time-countdown" id="quizTimer">00:30</span>
            <div class="qz-toggle-pill">
              <button class="qz-pill-btn active" id="btnShowTimer">Show</button>
              <button class="qz-pill-btn" id="btnHideTimer">Hide</button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 text-md-end mt-3 mt-md-0 d-flex flex-column align-items-md-end gap-2 justify-content-end">
          <div class="d-flex align-items-center gap-3 justify-content-md-end w-100">
            <button class="qz-flag-btn" id="flagQuestionBtn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M4 2v20h2v-8h10l1 2h6V6h-7l-1-2H4z"/></svg>
              <span>Flag Question</span>
            </button>
            <span class="qz-score-percentage">0%</span>
          </div>
          <div>
            <div class="qz-question-count">Question 2 of 5</div>
            <div class="qz-progress-container">
              <div class="qz-progress-fill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="qz-content-box">
      <h2 class="qz-question-text">2. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h2>
      
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <div class="qz-option-card" onclick="selectOption(this)">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="qz-option-card" onclick="selectOption(this)">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="qz-option-card" onclick="selectOption(this)">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="qz-option-card" onclick="selectOption(this)">
            <div class="qz-radio-circle"></div>
            <span class="qz-option-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
          </div>
        </div>
      </div>
    </div>

    <div class="qz-confidence-box">
      <h3 class="qz-confidence-title">How confident are you in your answer?</h3>
      <div class="qz-flex-badges">
        <div class="qz-mood-badge not-confident" onclick="selectConfidence(this)">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
          Not Confident
        </div>
        <div class="qz-mood-badge somewhat-confident" onclick="selectConfidence(this)">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="8" x2="16" y1="15" y2="15"></line><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
          Somewhat Confident
        </div>
        <div class="qz-mood-badge highly-confident" onclick="selectConfidence(this)">
          <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
          Highly Confident
        </div>
      </div>
    </div>

    <footer class="qz-footer-controls">
      <a href="#" class="qz-nav-btn btn-prev">← &nbsp; Previous</a>
      <div class="d-flex gap-3">
        <a href="#" class="qz-nav-btn btn-skip">Skip Question</a>
        <button class="qz-nav-btn btn-next" id="nextQuestionBtn" disabled>Next &nbsp; →</button>
      </div>
    </footer>

  </div>
{/* 
<!-- 4th pages strat --> */}
<div class="quiz-container">
    <a href="#" class="back-circle-btn">←</a>

    <div class="quiz-header-card">
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <div class="quiz-title">Course Name: 1-Mastry Quiz</div>
          <div class="timer-wrapper">
            <span class="timer-countdown" id="timerDisplay">00:30</span>
            <div class="toggle-switch-pill">
              <button class="toggle-pill-btn active" id="showTimerTrigger">Show</button>
              <button class="toggle-pill-btn" id="hideTimerTrigger">Hide</button>
            </div>
          </div>
        </div>
        
        <div class="right-header-metrics d-flex flex-column align-items-end gap-2">
          <div class="d-flex align-items-center gap-3">
            <button class="flag-action-btn" id="flagActionBtn">
              <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M4 2v20h2v-8h10l1 2h6V6h-7l-1-2H4z"/></svg>
              <span id="flagButtonText">Flag Question</span>
            </button>
            <span class="score-metric" id="scoreIndicator">0%</span>
          </div>
          <div class="text-end">
            <div class="question-progress-text" id="progressQuestionText">Question 1 of 5</div>
            <div class="progress-bar-container mt-1">
              <div class="progress-bar-fill" id="progressBarFill"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="quiz-body-card">
      <div class="question-statement" id="questionStatementText">1. Lorem ipsum dolor sit amet, consectetur adipiscing elit?</div>
      
      <div class="row g-3">
        <div class="col-12 col-md-6">
          <div class="option-item-card" onclick="handleOptionSelect(this)">
            <div class="custom-radio-indicator"></div>
            <div class="option-label-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="option-item-card" onclick="handleOptionSelect(this)">
            <div class="custom-radio-indicator"></div>
            <div class="option-label-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="option-item-card" onclick="handleOptionSelect(this)">
            <div class="custom-radio-indicator"></div>
            <div class="option-label-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="option-item-card" onclick="handleOptionSelect(this)">
            <div class="custom-radio-indicator"></div>
            <div class="option-label-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</div>
          </div>
        </div>
      </div>
    </div>

    <div class="confidence-section-card">
      <div class="confidence-title">How confident are you in your answer?</div>
      <div class="confidence-pills-row">
        <div class="mood-pill-btn not-confident" onclick="handleConfidenceSelect(this)">
          Not Confident
        </div>
        <div class="mood-pill-btn somewhat-confident" onclick="handleConfidenceSelect(this)">
          Somewhat Confident
        </div>
        <div class="mood-pill-btn highly-confident" onclick="handleConfidenceSelect(this)">
          Highly Confident
        </div>
      </div>
    </div>

    <footer class="navigation-footer-bar">
      <a href="#" class="action-nav-btn prev-style">← &nbsp; Previous</a>
      <div class="right-action-group d-flex gap-3">
        <a href="#" class="action-nav-btn skip-style">Skip Question</a>
        <button class="action-nav-btn next-style" id="nextActionBtn" disabled>Next &nbsp; →</button>
      </div>
    </footer>
  </div>

{/* <!-- 4th pages End --> */}

{/* <!-- 5th pages Strat --> */}
<div class="container" style={{ maxWidth: "1000px" }}>
    <div class="d-flex align-items-center mb-4">
        <button class="btn btn-link text-dark p-0 me-3">←</button>
        <div>
            <h4 class="fw-bold m-0">Quiz Summary</h4>
            <small class="text-muted">Review Your Attempt</small>
        </div>
        <div class="ms-auto fw-bold text-success">00:10</div>
    </div>

    <div class="summary-container">
        <table class="table align-middle">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Questions</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>1.</td><td>Lorem ipsum dolor sit amet...</td><td><span class="status-badge answered">Answered</span></td><td><button class="btn btn-review">Review</button></td></tr>
                <tr><td>2.</td><td>Lorem ipsum dolor sit amet...</td><td><span class="status-badge answered">Answered</span> <span class="flag-icon">🚩</span></td><td><button class="btn btn-review">Review</button></td></tr>
                <tr><td>3.</td><td>Lorem ipsum dolor sit amet...</td><td><span class="status-badge">Not Answered</span></td><td><button class="btn btn-review">Review</button></td></tr>
            </tbody>
        </table>
    </div>

    <div class="d-flex justify-content-between mt-4">
        <button class="btn btn-outline-dark">← Previous</button>
        <button class="btn btn-primary px-4">Finish Mastery Quiz →</button>
    </div>
</div>

        {/* </main> */}
   </>
  )
}

export default Quiz
