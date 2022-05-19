import React from 'react';
import { useSelector } from 'react-redux';
import { Timeline, Text, Title, Group, Container } from '@mantine/core';

const ProjectView = (props) => {
  const lessonState = useSelector(state => state.LessonState);

  return(
    <Container className='project-view'>
      <Title align='center' order={3}>Ideas</Title>
      <Group spacing={5} style={{padding: 5}}>
        <Text size='lg'>Buy Contract</Text>
        <Text size='md'>This contract will allow users to buy and send it to the user. </Text>
      </Group>
      <Title order={5} style={{padding: 5}}>Follow these steps</Title>
      <Timeline active={lessonState.timeline}>
        <Timeline.Item title="Add Contract"/>
        <Timeline.Item title="Rename Contract"/>
        <Timeline.Item title="Add Entry Point"/>
        <Timeline.Item title="Rename Entry Point to Mint"/>
        <Timeline.Item title="Add "/>
      </Timeline>
    </Container>
  )
}

export default ProjectView;
