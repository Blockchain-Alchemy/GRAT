import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Timeline, Text, Title, Group, ScrollArea } from '@mantine/core';
import { useRef } from 'react';

const ProjectView = ({ recipes }) => {
  const lessonState = useSelector((state) => state.LessonState);
  const viewport = useRef();

  const scrollTo = (top) => {
    viewport.current.scrollTo({ top: top, behavior: 'smooth' });
  }

  useEffect(() => {
    lessonState.timeline >= 4 && scrollTo(lessonState.timeline * 90);
  }, [lessonState.timeline])

  return (
    <ScrollArea className="project-view" scrollbarSize={0} viewportRef={viewport}>
      <Title align="center" spacing={5} order={3} style={{ marginTop: 10 }}>
        Recipe
      </Title>
      <Group position="center" spacing={5} style={{ padding: 5 }}>
        <Text className="fundrasier" size="large" style={{ marginTop: 10, fontWeight: 600 }}>Fundrasier Contract</Text>
        <Text size="md" style={{ marginTop: 5 ,  padding: 6}} >
          This contract will allow users to send Tezos to the contract and it will keep a ledger of donations.{' '}
        </Text>
      </Group>
      <Title order={5} spacing={5}  style={{padding: 10 }}>
        Follow these steps:
      </Title>
      <Timeline active={lessonState.timeline} style={{ padding: 20 }}>
        {recipes.map((item, index) => (
          <Timeline.Item key={index} title={item.text} >
            <Text color="dimmed" size="sm">{item.hint} </Text>
          </Timeline.Item>
        ))}
        {/* <Timeline.Item title="Add Contract"/>
        <Timeline.Item title="Rename Contract"/>
        <Timeline.Item title="Add Entry Point"/>
        <Timeline.Item title="Rename Entry Point to Mint"/>
        <Timeline.Item title="Add In Statement"/> */}
      </Timeline>
    </ScrollArea>
  );
};

export default ProjectView;
