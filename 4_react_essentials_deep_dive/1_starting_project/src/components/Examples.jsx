// react hook
import { Fragment, useState } from 'react';
// import Fragment from 'react';
import Tabs from './Tabs';
import TabButton from './TabButton';
import { EXAMPLES } from '../data.js';
import Section from './Section.jsx';

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedButton);
    }

    return (
      <Section id="examples" title="Examples">
        <Tabs
          ButtonsContainer="menu"
          buttons={
            <>
              <TabButton
                isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}
              >
                State
              </TabButton>
            </>
          }>
          {!selectedTopic ? (
              <p>Please select a topic.</p>
            ) : (
              <div id="tab-content">
                  <h3>{EXAMPLES[selectedTopic].title}</h3>
                  <p>{EXAMPLES[selectedTopic].description}</p>
                  <pre>
                  <code>{EXAMPLES[selectedTopic].code}</code>
                  </pre>
              </div>
          )}
        </Tabs>
        


      </Section>
    )
}