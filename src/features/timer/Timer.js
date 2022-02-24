import React, {useState} from "react";
import {View, StyleSheet, Text, Vibration, Platform} from "react-native";
import {colors} from "react-native-elements";
import {fontSizes, paddingSizes} from "../../utils/sizes";

import {CountDown} from "../../components/CountDown";
import {Icon} from "react-native-elements";
import {ProgressBar} from "react-native-paper";
import {Timing} from "./Timing";

import {useKeepAwake} from "expo-keep-awake";

const defaultTime = 1;

export const Timer = ({focusSubject, onTimerEnd}) => {
  useKeepAwake();
  const [minutes, setMinutes] = useState(0.1);

  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(defaultTime);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 2000);
    } else {
      Vibration.vibrate(1000);
    }
  };

  const onEnd = () => {
    setMinutes(defaultTime);
    vibrate();

    //console.log(min);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>

      <View style={styles.containerTitle}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject} </Text>
      </View>
      <View>
        <ProgressBar
          color="#d50000"
          style={{height: 10, width: 250}}
          progress={progress}
        />
      </View>
      <View style={styles.times}>
        <Timing onChangeTime={changeTime} />
      </View>

      <View style={styles.iconStyle}>
        <Icon
          type="material-community"
          name={isStarted ? "pause" : "play"}
          color="white"
          size={fontSizes.xxxl}
          onPress={() => setIsStarted(!isStarted)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: paddingSizes.xxl,
    flex: 1,

    alignItems: "center",
  },
  title: {
    color: colors.white,
    textAlign: "center",
    paddingTop: paddingSizes.md,
  },
  task: {
    fontWeight: "bold",
    color: colors.white,
    textAlign: "center",
    padding: paddingSizes.sm,
  },
  containerTitle: {
    padding: paddingSizes.xl,
  },
  countDown: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    flex: 1,
    flexDirection: "row",
  },
  times: {
    margin: paddingSizes.xxl,
  },
});
