import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Timeline, Text, Title, Group, ScrollArea } from '@mantine/core';
import { useRef } from 'react';

const ProjectView = ({ recipe }) => {
  const lessonState = useSelector((state) => state.LessonState);
  const viewport = useRef();

  const scrollTo = (top) => {
    viewport.current.scrollTo({ top: top, behavior: 'smooth' });
  };

  useEffect(() => {
    lessonState.timeline >= 2 && scrollTo((lessonState.timeline + 2) * 90);
  }, [lessonState.timeline]);

  useEffect(() => scrollTo(0), [recipe]);

  return (
    <ScrollArea
      className="project-view"
      scrollbarSize={0}
      viewportRef={viewport}
    >
      <Title align="center" spacing={5} order={3} style={{ marginTop: 10 }}>
        Recipe
      </Title>
      <Group position="center" spacing={5} style={{ padding: 5 }}>
        <Text
          className="fundrasier"
          size="large"
          style={{ marginTop: 10, fontWeight: 600 }}
        >
          {recipe.name}
        </Text>
        <Text size="md" style={{ marginTop: 5, padding: 6 }}>
          {recipe.description}
        </Text>
      </Group>
      <Title order={5} spacing={5} style={{ padding: 10 }}>
        Follow these steps:
      </Title>
      <Timeline active={lessonState.timeline} style={{ padding: 20 }}>
        {(recipe.recipes || []).map((item, index) => (
          <Timeline.Item
            key={index}
            title={item.text}
            style={{ minHeight: '66px' }}
          >
            <Text color="dimmed" size="sm">
              {item.hint}{' '}
            </Text>
          </Timeline.Item>
        ))}
      </Timeline>
    </ScrollArea>
  );
};

export default ProjectView;
