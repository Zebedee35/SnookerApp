import React, { FC } from 'react'
import { StyleSheet, TouchableOpacity, Modal, FlatList, Pressable } from 'react-native'

import { ISeason } from '../types/apiTypes'
import xTheme from '../utils/xTheme'
import Box from './box'
import Label from './label'

type TSeasonListModalViewProps = {
  modalVisible: boolean,
  dataList: ISeason[] | undefined,
  onSeasonSelected: (item: ISeason) => void,
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

const SeasonListModalView: FC<TSeasonListModalViewProps> = ({ modalVisible, dataList, onSeasonSelected, setModalVisible }) => {

  return <Modal animationType='fade' transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
    }}
  >
    <Box style={styles.centeredView}>
      <Pressable style={styles.tapFrame} activeOpacity={1} onPress={() => {
        setModalVisible(!modalVisible)
      }}>

        <Box style={styles.modalView}>
          <Label textType='bold' style={styles.modalText}>Season List</Label>
          <FlatList
            data={dataList}
            keyExtractor={(item) => { return '' + item.season }}
            renderItem={({ item }) => <TouchableOpacity style={{ height: 40 }} onPress={() => onSeasonSelected(item)}>
              <Label style={{ flex: 1, fontSize: 16, textAlign: 'center' }}>{item.season}</Label>
            </TouchableOpacity>}
            style={{ width: 100 }} />
          <TouchableOpacity
            style={{ ...styles.closeButton }}
            onPress={() => {
              setModalVisible(!modalVisible)
            }}
          >
            <Label style={styles.buttonText}> Cancel </Label>
          </TouchableOpacity>
        </Box>
      </Pressable>

    </Box>
  </Modal>
}

export default SeasonListModalView

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: xTheme.colors.modalTransparentBackground
  },
  tapFrame: {
    flex: 1,
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 2,
    width: 200,
    height: 350,
    backgroundColor: xTheme.colors.modalWindow,
    borderRadius: xTheme.borderRadius,
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  closeButton: {
    backgroundColor: xTheme.colors.tabBar,
    borderRadius: xTheme.borderRadius,
    marginTop: 20,
    padding: 10
  },
  buttonText: {
    color: xTheme.colors.negative,
    textAlign: "center",
    fontSize: 16
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18
  }
});
