import { StatusBar } from "expo-status-bar";
import {
  Checkbox,
  NativeBaseProvider,
  Input,
  Radio,
  Select,
  CheckIcon,
  Switch,
  Button,
  VStack,
  HStack,
  Alert,
  IconButton,
  Heading,
  CloseIcon,
  Collapse
} from "native-base";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const [value, setValue] = useState("ReactNative");
  const [service, setService] = useState("");
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [bluetooth, setBluetooth] = useState(true);
  const [checkbox, setCheckbox] = useState(true);

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <VStack space={4} alignItems="center">
          <Radio.Group
            name="myRadioGroup"
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
            pb={"1"}
          >
            <Radio key={"1"} shadow={2} value="ReactNative">
              ReactNative
            </Radio>
            <Radio key={"2"} shadow={2} value="Kotlin">
              Kotlin
            </Radio>
          </Radio.Group>
          <Select
            selectedValue={service}
            minWidth="200"
            accessibilityLabel="Choose Service"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" />,
            }}
            mt={1}
            onValueChange={(itemValue) => setService(itemValue)}
          >
            <Select.Item key={"101"} label="UX Research" value="ux" />
            <Select.Item key={"102"} label="Web Development" value="web" />
            <Select.Item
              key={"103"}
              label="Cross Platform Development"
              value="cross"
            />
            <Select.Item key={"104"} label="UI Designing" value="ui" />
            <Select.Item
              key={"105"}
              label="Backend Development"
              value="backend"
            />
          </Select>
          <Text>Bluetooth</Text>
          <Switch defaultIsChecked colorScheme="primary" value={bluetooth} onChange={() => setBluetooth(!bluetooth)}/>
          {/*  */}
          <Input mx="3" placeholder="Name" value={name} onChangeText={(text) => setName(text)} w="300px" maxWidth="300px" />
          <Checkbox
            shadow={2}
            value="test"
          >
            I accept the terms & conditions
          </Checkbox>
          <Button size={"lg"} onPress={() => setShow(true)}>
            Send
          </Button>
        </VStack>
        <Collapse isOpen={show}>
          <Alert shadow={2} maxW="400" w="100%" colorScheme="info">
            <VStack space={1} flexShrink={1} w="100%">
              <HStack
                flexShrink={1}
                space={2}
                alignItems="center"
                justifyContent="space-between"
              >
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Heading
                    fontSize="md"
                    fontWeight="medium"
                    color="coolGray.800"
                  >
                    Answers:
                  </Heading>
                </HStack>
                <IconButton
                  variant="unstyled"
                  onPress={() => setShow(false)}
                  icon={<CloseIcon size="3" color="coolGray.600" />}
                />
              </HStack>
              <Text>
                Radio: {value}
              </Text>
              <Text>
              Select: {service}
              </Text>
              <Text>
              Bluetooth: {bluetooth ? "true" : "false"}
              </Text>
              <Text>
              Name: {name}
              </Text>
            </VStack>
          </Alert>
        </Collapse>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
