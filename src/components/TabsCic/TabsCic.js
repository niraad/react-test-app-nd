import React from "react";
import "./TabsCic.scss";
import {
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Checkbox,
  Button,
  TextInput,
} from "@carbon/react";
import { Grid, Column } from "carbon-components-react";
import RangeDatePicker from "../RangeDatePicker/RangeDatePicker";

const TabsCic = () => {
  return (
    <Grid fullWidth>
      <Column Column lg={16} md={8} sm={4}>
        <Tabs>
          <TabList aria-label="List of tabs">
            <Tab>Reserver your desk</Tab>
            <Tab>Reserve Meeting-room</Tab>
            <Tab>Activity</Tab>
            <Tab disabled>Settings</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
                <h3 style={{ margin:"32px 0" }}>Tab Panel 1</h3>
                <RangeDatePicker />
            </TabPanel>
            <TabPanel>
              <form style={{ margin: "2em" }}>
                <legend className={`cds--label`}>Validation example</legend>
                <Checkbox id="cb" labelText="Accept privacy policy" />
                <Button
                  style={{ marginTop: "1rem", marginBottom: "1rem" }}
                  type="submit"
                >
                  Submit
                </Button>
                <TextInput
                  type="text"
                  labelText="Text input label"
                  helperText="Optional help text"
                  id="text-input-1"
                />
              </form>
            </TabPanel>
            <TabPanel>Tab Panel 3</TabPanel>
            <TabPanel>Tab Panel 4</TabPanel>
          </TabPanels>
        </Tabs>
      </Column>
    </Grid>
  );
};

export default TabsCic;
