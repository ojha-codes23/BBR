import React from 'react'

const InterestsTagsTab = () => {
  return (
    <div>
    <main className="interests-master-card">

        <h2 className="interests-header-title">
            <i className="fa-regular fa-bookmark"></i> Interests &amp; Tags
        </h2>
        <p className="interests-sub-description">
            Select tags to personalize your course, event, and resource recommendations
        </p>

        <form onsubmit="event.preventDefault();">

            {/* <!-- Search Control Element --> */}
            <div className="search-tags-input-group">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" className="search-tags-field-control" placeholder="Search Tags" />
            </div>

            {/* <!-- Block 1: Currently Selected State Panels --> */}
            <h3 className="tags-section-heading">Your Selected Tags (4)</h3>
            <div className="tags-flex-cloud-deck">
                <div className="pill-badge-selected-node">
                    Cybersecurity <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="pill-badge-selected-node">
                    Technology <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="pill-badge-selected-node">
                    Career Development <i className="fa-solid fa-xmark"></i>
                </div>
            </div>

            {/* <!-- Block 2: Pool of Available Elements --> */}
            <h3 className="tags-section-heading">Available Tags</h3>
            <div className="tags-flex-cloud-deck">
                <button type="button" className="pill-badge-available-node">Grant Writing</button>
                <button type="button" className="pill-badge-available-node">Data Analytics</button>
                <button type="button" className="pill-badge-available-node">Fiber Optics</button>
                <button type="button" className="pill-badge-available-node">Business</button>
                <button type="button" className="pill-badge-available-node">Marketing</button>
                <button type="button" className="pill-badge-available-node">Leadership</button>
                <button type="button" className="pill-badge-available-node">Youth Program</button>
            </div>

            {/* <!-- Action Form Operations Bar Trigger --> */}
            <button type="submit" className="btn-update-tags-action">
                Update Tags
            </button>

        </form>

    </main>
</div>
  )
}

export default InterestsTagsTab