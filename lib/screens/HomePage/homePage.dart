import "package:flutter/material.dart";
import "package:poopmates/constants/Constantcolors.dart";

class HomePage extends StatelessWidget {
  final ConstantColors constantColors = ConstantColors();
  
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: constantColors.redColor,
    );
  }
}
