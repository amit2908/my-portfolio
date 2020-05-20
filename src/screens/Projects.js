import React from 'react';
import ProjectCard from '../components/ProjectCard'
import R from '../res/index'

class Projects extends React.Component {

    render() {
        return (
            <div>
                <div className="Project-container">
                    <ProjectCard title={R.string.trans.pey.title}
                        description={R.string.trans.pey.description}
                        screen1={R.image.pey.screen1}
                        screen2={R.image.pey.screen1}
                        logo={R.image.pey.logo}
                        client={R.string.trans.pey.client}
                        language={R.string.trans.pey.language}
                        domain={R.string.trans.pey.domain}
                        appStoreLink={R.string.trans.pey.appStoreLink}
                    />

                    <ProjectCard title={R.string.trans.orgamax.title}
                        description={R.string.trans.orgamax.description}
                        screen1={R.image.orgamax.screen1}
                        screen2={R.image.orgamax.screen2}
                        language={R.string.trans.orgamax.language}
                        domain={R.string.trans.orgamax.domain}
                        appStoreLink={R.string.trans.orgamax.appStoreLink}
                        logo={R.image.pey.logo}
                        client={R.string.trans.orgamax.client}
                    />

                    <ProjectCard title={R.string.trans.pey.title}
                        description={R.string.trans.pey.description}
                        screen1={R.image.pey.screen1}
                        screen2={R.image.pey.screen1}
                        logo={R.image.pey.logo}
                    />
                </div>
                </div>

        );
    }
}

export default Projects;