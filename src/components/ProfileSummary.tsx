import React from 'react'

type Summary = Array<string>

function ProfileSummary(props: { summary: Summary, showDetail: Boolean }) {
  const { summary, showDetail } = props;
  return (
    showDetail && (
      <div className="bordered standard-padding standard-margin-bottom">
        {
          <ul>
            {summary.map((item, index) => (
              <li key={index} style={{ paddingBottom: 5 }}>
                {item}
              </li>
            ))}
          </ul>
        }
      </div>
    )
  );
}

ProfileSummary.defaultProps = {
  title: String,
  summary: Array<string>
}

export default ProfileSummary