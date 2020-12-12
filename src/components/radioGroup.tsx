import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Box from './box';
import Label from './label';

export type RadioGroupItem = {
  id: number;
  name: string;
};

export type RadioGroupProps = {
  items: RadioGroupItem[];
  selected?: RadioGroupItem;
  onSelected(item: RadioGroupItem): void;
};

export type RadioButtonProps = {
  item: RadioGroupItem;
  selected?: RadioGroupItem;
  onSelected(item: RadioGroupItem): void;
};

const RadioButton = (props: RadioButtonProps) => {
  const { item, selected, onSelected } = props;

  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onSelected(item)}>
      <Label>{item.name}</Label>
      <Box style={styles.button}>
        {selected?.id === item.id && <Box style={styles.selectedButton} />}
      </Box>
    </TouchableOpacity>
  );
};


const RadioGroup = (props: RadioGroupProps) => {
  const { items, selected, onSelected } = props;

  return (
    <Box>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RadioButton
            item={item}
            selected={selected}
            onSelected={onSelected}
          />
        )}
      />
    </Box>
  );
};


const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
    padding: 12,
  },
  button: {
    height: 24,
    width: 24,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedButton: {
    width: 14,
    height: 14,
    borderRadius: 14,
    backgroundColor: '#1976d2',
  },
});

export { RadioButton };
export default RadioGroup;
