import { ProjectsQuery } from '@/generated/graphql';
import styles from './Projects.module.css';

interface Props {
    projects: ProjectsQuery;
}

export default function Projects({ projects }: Props) {
    return (
        <div id="work-id" className={styles.work}>
            <div className={styles.work_text}>
                <div className={styles.work_init}>
                    <div>
                        <h2>{`03.`} </h2>
                        <h1>{`Some Things I've Built`}</h1>
                    </div>
                    <div className={styles.separator}></div>
                </div>
                <p>
                    A collection of projects I have worked on using software
                    development technologies
                </p>
            </div>

            {/* <div class="work-all">
                <div class="work-row">
                    <div class="work-item">
                        <i
                            class="fa fa-folder-o work-folder fa-2x"
                            aria-hidden="true"
                        ></i>
                        <h1>CP-snippets</h1>
                        <h2>
                            A library of algorithms for competitive programming
                        </h2>
                        <div class="work-tags-container">
                            <div class="work-tags">
                                <p>C++</p>
                                <p>Algorithms</p>
                                <p>Data Structures</p>
                            </div>
                        </div>
                        <a
                            href="https://github.com/brayandm/CP-snippets"
                            target="_blank"
                        >
                            <i
                                class="fa fa-external-link work-icon fa-lg"
                                aria-hidden="true"
                            ></i>
                        </a>
                    </div>
                </div>
            </div> */}
        </div>
    );
}
