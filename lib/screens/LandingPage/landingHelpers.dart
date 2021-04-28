import "package:flutter/material.dart";

import "package:font_awesome_flutter/font_awesome_flutter.dart";
import "package:page_transition/page_transition.dart";
import "package:provider/provider.dart";

import "package:poopmates/constants/Constantcolors.dart";
import "package:poopmates/services/Auth.dart";
import "package:poopmates/screens/HomePage/HomePage.dart";
import "package:poopmates/screens/LandingPage/landingService.dart";


class LandingHelpers with ChangeNotifier {
  final ConstantColors constantColors = ConstantColors();

  Widget bodyImage(BuildContext context) {
    return Container(
      height: MediaQuery.of(context).size.height * 0.65,
      width: MediaQuery.of(context).size.width,
      decoration: BoxDecoration(
          image: DecorationImage(image: AssetImage("assets/images/login.png"))),
    );
  }

  Widget taglineText(BuildContext context) {
    return Positioned(
        top: 450,
        child: Container(
            padding: EdgeInsets.only(top: 20, left: 20, right: 20),
            constraints: BoxConstraints(maxWidth: 300),
            child: RichText(
                text: TextSpan(
              text: "THE place to sh*t talk.",
              style: TextStyle(
                  fontFamily: "Poppins",
                  color: constantColors.brownColor,
                  fontWeight: FontWeight.bold,
                  fontSize: 40.0),
            ))));
  }

  Widget mainButtons(BuildContext context) {
    return Positioned(
        bottom: 140,
        child: Container(
          width: MediaQuery.of(context).size.width,
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              // EMAIL
              GestureDetector(
                onTap: () {
                  emailDrawer(context);
                },
                child: Container(
                  child: Icon(Icons.mail_outline,
                      color: constantColors.yellowColor),
                  width: 80,
                  height: 40,
                  decoration: BoxDecoration(
                    border: Border.all(color: constantColors.yellowColor),
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              // GOOGLE
              GestureDetector(
                onTap: () {
                  print("SINGING IN WITH GOOGLE");
                  Provider.of<Auth>(context, listen: false)
                      .signInWithGoogle()
                      .whenComplete(() {
                    Navigator.pushReplacement(
                        context,
                        PageTransition(
                            child: HomePage(), type: PageTransitionType.fade));
                  });
                },
                child: Container(
                  child: Icon(FontAwesomeIcons.google,
                      color: constantColors.redColor),
                  width: 80,
                  height: 40,
                  decoration: BoxDecoration(
                    border: Border.all(color: constantColors.redColor),
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
              // FACEBOOK
              GestureDetector(
                child: Container(
                  child: Icon(FontAwesomeIcons.facebookF,
                      color: constantColors.blueColor),
                  width: 80,
                  height: 40,
                  decoration: BoxDecoration(
                    border: Border.all(color: constantColors.blueColor),
                    borderRadius: BorderRadius.circular(10),
                  ),
                ),
              ),
            ],
          ),
        ));
  }

  Widget privacyText(BuildContext context) {
    return Positioned(
        bottom: 30,
        left: 20,
        right: 20,
        child: Container(
            // padding: EdgeInsets.only(left: 20, right: 20),
            constraints: BoxConstraints(maxWidth: 300),
            child: Column(
              children: [
                Text(
                  "By continuing you are agreeing to PoopMate's Terms of Services and Privacy Policy.",
                  textAlign: TextAlign.center,
                )
              ],
            )));
  }

  emailDrawer(BuildContext context) {
    return showModalBottomSheet(
        context: context,
        builder: (context) {
          return Container(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 150),
                  child: Divider(
                    thickness: 4.0,
                    color: constantColors.whiteColor,
                  ),
                ),
                Provider.of<LandingService>(context, listen: false).passwordlessSignIn(context),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    MaterialButton(
                        color: constantColors.blueColor,
                        child: Text("Log In",
                            style: TextStyle(
                                color: constantColors.whiteColor,
                                fontSize: 18,
                                fontWeight: FontWeight.bold)),
                        onPressed: () {}),
                    MaterialButton(
                        color: constantColors.redColor,
                        child: Text("Sign up",
                            style: TextStyle(
                                color: constantColors.whiteColor,
                                fontSize: 18,
                                fontWeight: FontWeight.bold)),
                        onPressed: () {})
                  ],
                )
              ],
            ),
            height: MediaQuery.of(context).size.height * 0.5,
            width: MediaQuery.of(context).size.width,
            decoration: BoxDecoration(
                color: constantColors.blueGreyColor,
                borderRadius: BorderRadius.only(
                    topLeft: Radius.circular(15),
                    topRight: Radius.circular(15))),
          );
        });
  }
}
