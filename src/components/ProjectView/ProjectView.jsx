import React from 'react';
import { Checkbox, Text, Title, Group, CheckboxGroup, Container } from '@mantine/core';

const ProjectView = (props) => {
  return(
    <Container>
      <Title align='center' order={3}>Lessons</Title>
      <Group spacing={5} style={{padding: 5}}>
        <Text size='lg'>Staking</Text>
        <Text size='md'>This contract will allow users to stake tezos for a certain time and then withdraw after a certain time.</Text>
      </Group>
      <CheckboxGroup orientation="vertical" label="Follow these steps:" style={{padding: 5}} styles={{ label: {fontSize: 16} }}>
        <Checkbox label="Add Contract" value="addContract"/>
        <Checkbox label="Rename Contract" value="renameContract"/>
        <Checkbox label="Add Entry Point" value="addEntry"/>
        <Checkbox label="Rename Entry Point to Deposit" value="renameEntry"/>
      </CheckboxGroup>
    </Container>
  )
}

export default ProjectView;
