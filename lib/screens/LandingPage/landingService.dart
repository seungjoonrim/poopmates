import "package:flutter/material.dart";

import "package:cloud_firestore/cloud_firestore.dart";
import 'package:page_transition/page_transition.dart';
import "package:provider/provider.dart";

import "package:poopmates/screens/HomePage/HomePage.dart";
import 'package:poopmates/constants/Constantcolors.dart';
import "package:poopmates/services/Auth.dart";

class LandingService with ChangeNotifier {
  TextEditingController userEmailController = TextEditingController();
  TextEditingController userNameController = TextEditingController();
  TextEditingController userPasswordController = TextEditingController();

  final ConstantColors constantColors = ConstantColors();

  Widget passwordlessSignIn(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.4,
      width: MediaQuery.of(context).size.width,
      child: StreamBuilder<QuerySnapshot>(
          stream: FirebaseFirestore.instance.collection("allUsers").snapshots(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return Center(child: CircularProgressIndicator());
            } else {
              return new ListView(
                  children: snapshot.data.docs
                      .map((DocumentSnapshot documentSnapshot) {
                return ListTile(
                  leading: CircleAvatar(
                    backgroundImage:
                        NetworkImage(documentSnapshot.data()["userimage"]),
                  ),
                  subtitle: Text(documentSnapshot.data()["useremail"],
                      style: TextStyle(
                          color: constantColors.greenColor,
                          fontWeight: FontWeight.bold,
                          fontSize: 12)),
                  title: Text(documentSnapshot.data()["username"],
                      style: TextStyle(
                          color: constantColors.greenColor,
                          fontWeight: FontWeight.bold)),
                  trailing: IconButton(
                    icon: Icon(Icons.delete),
                    onPressed: () {},
                  ),
                );
              }).toList());
            }
          }),
    );
  }

  signInForm(BuildContext context) {
    return showModalBottomSheet(
      isScrollControlled: true,
      context: context,
      builder: (context) {
      return Container(
        height: MediaQuery.of(context).size.height * 0.30,
        width: MediaQuery.of(context).size.width,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 150),
              child: Divider(
                thickness: 4.0,
                color: constantColors.whiteColor,
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: TextField(
                controller: userEmailController,
                decoration: InputDecoration(
                  hintText: "Enter email",
                  hintStyle: TextStyle(
                    color: constantColors.whiteColor,
                    fontWeight: FontWeight.bold,
                    fontSize: 16)),
                style: TextStyle(
                  color: constantColors.whiteColor,
                  fontWeight: FontWeight.bold,
                  fontSize: 18),
              ),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 10),
              child: TextField(
                controller: userPasswordController,
                decoration: InputDecoration(
                  hintText: "Enter password",
                  hintStyle: TextStyle(
                    color: constantColors.whiteColor,
                    fontWeight: FontWeight.bold,
                    fontSize: 16)),
                style: TextStyle(
                  color: constantColors.whiteColor,
                  fontWeight: FontWeight.bold,
                  fontSize: 18),
              ),
            ),
            FloatingActionButton(
              child: Icon(Icons.done, color: constantColors.whiteColor),
              backgroundColor: constantColors.blueColor,
              onPressed: () {
                if (userEmailController.text.isNotEmpty) {
                  Provider.of<Auth>(context, listen: false).signIn(
                    userEmailController.text, userPasswordController.text).whenComplete(() {
                      Navigator.pushReplacement(context, PageTransition(child: HomePage(), type: PageTransitionType.bottomToTop));
                    });
                } else {
                  warningText(context, "Please fill out the shit breh.");
                }
              },
            )
          ],
        ),
        decoration: BoxDecoration(
          color: constantColors.blueGreyColor,
          borderRadius: BorderRadius.only(
            topLeft: Radius.circular(12),
            topRight: Radius.circular(12)
          )
        ),
      );
    });
  }

  createAccountForm(BuildContext context) {
    return showModalBottomSheet(
        isScrollControlled: true,
        context: context,
        builder: (context) {
          return Container(
              height: MediaQuery.of(context).size.height * 0.5,
              width: MediaQuery.of(context).size.width,
              decoration: BoxDecoration(
                color: constantColors.blueGreyColor,
                borderRadius: BorderRadius.only(
                  topLeft: Radius.circular(12),
                  topRight: Radius.circular(12)
                )
              ),
              child: Column(
                children: [
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 150),
                    child: Divider(
                      thickness: 4.0,
                      color: constantColors.whiteColor,
                    ),
                  ),
                  CircleAvatar(
                      backgroundColor: constantColors.blueColor, radius: 60),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: TextField(
                      controller: userNameController,
                      decoration: InputDecoration(
                          hintText: "Enter username",
                          hintStyle: TextStyle(
                              color: constantColors.whiteColor,
                              fontWeight: FontWeight.bold,
                              fontSize: 16)),
                      style: TextStyle(
                          color: constantColors.whiteColor,
                          fontWeight: FontWeight.bold,
                          fontSize: 18),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: TextField(
                      controller: userEmailController,
                      decoration: InputDecoration(
                          hintText: "Enter email",
                          hintStyle: TextStyle(
                              color: constantColors.whiteColor,
                              fontWeight: FontWeight.bold,
                              fontSize: 16)),
                      style: TextStyle(
                          color: constantColors.whiteColor,
                          fontWeight: FontWeight.bold,
                          fontSize: 18),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 10),
                    child: TextField(
                      controller: userPasswordController,
                      decoration: InputDecoration(
                          hintText: "Enter password",
                          hintStyle: TextStyle(
                              color: constantColors.whiteColor,
                              fontWeight: FontWeight.bold,
                              fontSize: 16)),
                      style: TextStyle(
                          color: constantColors.whiteColor,
                          fontWeight: FontWeight.bold,
                          fontSize: 18),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: FloatingActionButton(
                      child: Icon(Icons.done, color: constantColors.whiteColor),
                      backgroundColor: constantColors.redColor,
                      onPressed: () {
                        if (userEmailController.text.isNotEmpty) {
                          Provider.of<Auth>(context, listen: false).createAccount(
                              userEmailController.text, userPasswordController.text).whenComplete(() {
                      Navigator.pushReplacement(context, PageTransition(child: HomePage(), type: PageTransitionType.bottomToTop));
                    });
                        } else {
                          warningText(context, "Please fill out the shit breh.");
                        }
                      },
                    ),
                  )
                ],
          ));
        });
  }

  warningText(BuildContext context, String warningMsg) {
    return showModalBottomSheet(
      context: context,
      builder: (context) {
        return Container(
            decoration: BoxDecoration(
                color: constantColors.darkColor,
                borderRadius: BorderRadius.circular(15)),
            height: MediaQuery.of(context).size.height * 0.1,
            width: MediaQuery.of(context).size.width,
            child: Center(
                child: Text(warningMsg,
                    style: TextStyle(
                        color: constantColors.whiteColor,
                        fontSize: 16,
                        fontWeight: FontWeight.bold))));
      },
    );
  }
}
