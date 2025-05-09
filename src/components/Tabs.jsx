import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProjectList from './ProjectList';
import Post from './Post';

function UncontrolledExample() {
  return (
    <Tabs
      defaultActiveKey="projects"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="projects" title="Projects">
        <ProjectList />
      </Tab>
      <Tab eventKey="posts" title="Posts">
        <Post />
      </Tab>
    </Tabs>
  );
}

export default UncontrolledExample;