import 'dart:async';

import 'package:flutter/material.dart';
import 'package:page_transition/page_transition.dart';
import 'package:poopmates/constants/Constantcolors.dart';
import 'package:poopmates/screens/LandingPage/LandingPage.dart';

class SplashScreen extends StatefulWidget {
  @override
  _SplashscreenState createState() => _SplashscreenState();
}

class _SplashscreenState extends State<SplashScreen> {

  @override
  void initState() {
    Timer(
      Duration(seconds: 3),
      () => Navigator.pushReplacement(
        context,
        PageTransition(
          child: LandingPage(),
          type: PageTransitionType.fade
        )
      )
    );
    super.initState();
  }

  @override
  Widget build(BuildContext context) {

    final ConstantColors constantColors = ConstantColors();

    return Scaffold(
      backgroundColor: constantColors.whiteColor,
      body: Center(
        child: RichText(
          text: TextSpan(
            text: "Poop",
            style: TextStyle(
              fontFamily: "Poppins",
              color: constantColors.brownColor,
              fontWeight: FontWeight.bold,
              fontSize: 30.0
            ),
            children: <TextSpan>[
              TextSpan(
                text: "Mates",
                style: TextStyle(
                  fontFamily: "Poppins",
                  color: constantColors.brownColor,
                  fontWeight: FontWeight.bold,
                  fontSize: 34.0
                )
              ) 
            ]
          )
        )
      )
    );
  }
}
