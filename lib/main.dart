import 'package:flutter/material.dart';
import 'package:poopmates/constants/Constantcolors.dart';
import 'package:poopmates/screens/LandingPage/landingHelpers.dart';
import 'package:poopmates/screens/SplashScreen/splashScreen.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    ConstantColors constantColors = ConstantColors();
    return MultiProvider(
      child: MaterialApp(
        home: SplashScreen(),
        debugShowCheckedModeBanner: false,
        theme: ThemeData(
          accentColor: constantColors.brownColor,
          fontFamily: "Poppins",
          canvasColor: Colors.transparent),
      ),
      providers: [
        ChangeNotifierProvider(create: (_) => LandingHelpers())
      ],
    );
  }
}
