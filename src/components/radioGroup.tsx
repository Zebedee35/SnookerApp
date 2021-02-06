import React, { useContext } from 'react';
import { StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import Box from './box';
import Label from './label';

import consts from '../utils/Consts';
import { Theme, ThemeContext } from '../utils/Themes'

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
  const { currentTheme } = useContext(ThemeContext)
  const styles = customStyles(currentTheme);
  const { item, selected, onSelected } = props;

  return (
    <TouchableOpacity
      style={styles.radioButton}
      onPress={() => onSelected(item)}>
      <Label style={styles.label}>{item.name}</Label>
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


const customStyles = (t: Theme) => StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: t.listBG,
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
    backgroundColor: t.tabBar,
  },
  label: {
    fontSize: consts.fontSizes.listItem,
    color: t.text,
  }
});

export { RadioButton };
export default RadioGroup;
