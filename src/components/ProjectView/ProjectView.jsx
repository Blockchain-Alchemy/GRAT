import React from 'react';
import { useSelector } from 'react-redux';
import { Timeline, Text, Title, Group, Container } from '@mantine/core';

const ProjectView = ({ recipes }) => {
  const lessonState = useSelector((state) => state.LessonState);

  return (
    <Container className="project-view">
      <Title align="center" order={3}>
        Recipes
      </Title>
      <Group position="center" spacing={5} style={{ padding: 5 }}>
        <Text size="lg">Fundrasier Contract</Text>
        <Text size="md">
          This contract will allow users to send Tezos to the contract and it will keep a ledger of donations.{' '}
        </Text>
      </Group>
      <Title order={5} style={{ padding: 10 }}>
        Follow these steps
      </Title>
      <Timeline active={lessonState.timeline}>
        {recipes.map((item, index) => (
          <Timeline.Item key={index} title={item.text}>
            <Text color="dimmed" size="sm">{item.hint}</Text>
          </Timeline.Item>
        ))}
        {/* <Timeline.Item title="Add Contract"/>
        <Timeline.Item title="Rename Contract"/>
        <Timeline.Item title="Add Entry Point"/>
        <Timeline.Item title="Rename Entry Point to Mint"/>
        <Timeline.Item title="Add In Statement"/> */}
      </Timeline>
    </Container>
  );
};

export default ProjectView;
