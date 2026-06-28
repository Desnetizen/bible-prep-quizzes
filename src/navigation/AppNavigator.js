import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import HomeScreen from '../screens/HomeScreen';
import QuizScreen from '../screens/QuizScreen';
import QuizListScreen from '../screens/QuizListScreen';
import ResultsScreen from '../screens/ResultsScreen';
import HistoryScreen from '../screens/HistoryScreen';
import { Colors, Shadows } from '../theme';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const QuizStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();

function HomeStackScreen() {
  return <HomeStack.Navigator screenOptions={{ headerShown: false }}><HomeStack.Screen name="Home" component={HomeScreen} /></HomeStack.Navigator>;
}

function QuizStackScreen() {
  return (
    <QuizStack.Navigator screenOptions={{ headerShown: false }}>
      <QuizStack.Screen name="QuizList" component={QuizListScreen} />
      <QuizStack.Screen name="Quiz" component={QuizScreen} />
      <QuizStack.Screen name="Results" component={ResultsScreen} />
    </QuizStack.Navigator>
  );
}

function HistoryStackScreen() {
  return <HistoryStack.Navigator screenOptions={{ headerShown: false }}><HistoryStack.Screen name="History" component={HistoryScreen} /></HistoryStack.Navigator>;
}

function getTabIcon(routeName, focused) {
  if (routeName === 'HomeTab') return focused ? 'home' : 'home-outline';
  if (routeName === 'QuizTab') return focused ? 'help-circle' : 'help-circle-outline';
  return focused ? 'bar-chart' : 'bar-chart-outline';
}

function GlassTabBar({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.tabBarOuter, { paddingBottom: Math.max(insets.bottom, 10) }]}>
      <LinearGradient
        colors={['#FFFFFF', '#FBF8EF']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.tabBarInner}>
        {state.routes.map((route, index) => {
          const focused = state.index === index;
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel ?? options.title ?? route.name;
          const color = focused ? Colors.navy : Colors.text.body;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!focused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable key={route.key} onPress={onPress} style={styles.tabItem}>
              <Ionicons name={getTabIcon(route.name, focused)} size={focused ? 32 : 30} color={color} />
              <Text style={[styles.tabLabel, { color }, focused && styles.activeLabel]}>{label}</Text>
              {focused && <View style={styles.activeUnderline} />}
            </Pressable>
          );
        })}
      </View>
      <View style={styles.bottomGem}>
        <View style={styles.bottomGemInner} />
      </View>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <GlassTabBar {...props} />}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: Colors.navy,
        tabBarInactiveTintColor: Colors.text.secondary,
        tabBarLabelStyle: { fontSize: 10, fontWeight: '700' },
        tabBarIcon: ({ focused, color, size }) => {
          let icon;
          if (route.name === 'HomeTab') icon = focused ? 'home' : 'home-outline';
          else if (route.name === 'QuizTab') icon = focused ? 'help-circle' : 'help-circle-outline';
          else icon = focused ? 'bar-chart' : 'bar-chart-outline';
          return (
            <View style={focused ? styles.activeIconWrap : null}>
              {focused && (
                <LinearGradient
                  colors={['rgba(201,168,106,0.2)', 'transparent']}
                  start={{ x: 0.5, y: 0 }}
                  end={{ x: 0.5, y: 1 }}
                  style={styles.activeGlow}
                />
              )}
              <Ionicons name={icon} size={size} color={focused ? Colors.navy : color} />
            </View>
          );
        },
        tabBarIndicatorStyle: {
          backgroundColor: Colors.gold,
          height: 2,
          borderRadius: 1,
        },
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeStackScreen} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="QuizTab" component={QuizStackScreen} options={{ tabBarLabel: 'Quizzes' }} />
      <Tab.Screen name="HistoryTab" component={HistoryStackScreen} options={{ tabBarLabel: 'History' }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarOuter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    minHeight: 86,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderColor: 'rgba(16,35,62,0.08)',
    borderBottomWidth: 5,
    borderBottomColor: Colors.goldDark,
    overflow: 'hidden',
    ...Shadows.soft,
  },
  tabBarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 12,
    paddingHorizontal: 16,
  },
  tabItem: {
    flex: 1,
    minHeight: 58,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 13,
    lineHeight: 20,
    marginTop: 2,
    fontWeight: '500',
  },
  activeLabel: {
    fontWeight: '700',
  },
  activeUnderline: {
    width: 52,
    height: 3,
    borderRadius: 2,
    backgroundColor: Colors.goldDark,
    marginTop: 5,
  },
  activeIconWrap: {
    position: 'relative',
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeGlow: {
    position: 'absolute',
    top: -4,
    left: -8,
    right: -8,
    bottom: -4,
    borderRadius: 16,
  },
  bottomGem: {
    position: 'absolute',
    bottom: -11,
    left: '50%',
    width: 24,
    height: 24,
    marginLeft: -12,
    borderWidth: 2,
    borderColor: Colors.goldDark,
    backgroundColor: Colors.background,
    transform: [{ rotate: '45deg' }],
  },
  bottomGemInner: {
    position: 'absolute',
    left: 7,
    top: 7,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gold,
  },
});
