import "package:flutter/material.dart";

import 'package:firebase_core/firebase_core.dart';
import "package:provider/provider.dart";

import "package:poopmates/constants/Constantcolors.dart";
import "package:poopmates/screens/LandingPage/landingHelpers.dart";
import "package:poopmates/screens/LandingPage/landingService.dart";
import "package:poopmates/services/Auth.dart";
import "package:poopmates/screens/SplashScreen/splashScreen.dart";


void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
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
        ChangeNotifierProvider(create: (_) => Auth()),
        ChangeNotifierProvider(create: (_) => LandingHelpers()),
        ChangeNotifierProvider(create: (_) => LandingService())
      ],
    );
  }
}
