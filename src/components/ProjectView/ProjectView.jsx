import React from 'react';
import { Timeline, Text, Title, Group, Container } from '@mantine/core';

const ProjectView = (props) => {
  return(
    <Container>
      <Title align='center' order={3}>Lessons</Title>
      <Group spacing={5} style={{padding: 5}}>
        <Text size='lg'>Staking</Text>
        <Text size='md'>This contract will allow users to stake tezos for a certain time and then withdraw after a certain time.</Text>
      </Group>
      <Title order={5} style={{padding: 5}}>Follow these steps</Title>
      <Timeline active={1}>
        <Timeline.Item title="Add Contract"/>
        <Timeline.Item title="Rename Contract"/>
        <Timeline.Item title="Add Entry Point"/>
        <Timeline.Item title="Rename Entry Point to Deposit"/>
      </Timeline>
    </Container>
  )
}

export default ProjectView;
