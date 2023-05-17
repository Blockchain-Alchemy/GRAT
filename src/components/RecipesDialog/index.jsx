import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Group, Modal, Select } from '@mantine/core';
import { setRecipeName } from 'store/actions';

const RecipesDialog = ({ opened, onClose }) => {
  const dispatch = useDispatch();
  const { recipeName } = useSelector((state) => state.LessonState);
  const [recipe, setRecipe] = useState(recipeName);

  const handleSubmit = () => {
    dispatch(setRecipeName(recipe));
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Select Recipe" centered>
      <>
        <Select
          label="Please select recipe"
          placeholder="Select recipe"
          onChange={(value) => setRecipe(value)}
          value={recipe}
          data={[
            { value: 'donate', label: 'Donate' },
            { value: 'marketplace', label: 'Marketplace contract' },
          ]}
        />
        <Group mt="xl" position="right">
          <Button variant="outline" onClick={handleSubmit}>
            OK
          </Button>
        </Group>
      </>
    </Modal>
  );
};

export default RecipesDialog;
