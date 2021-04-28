import "package:flutter/material.dart";

import "package:cloud_firestore/cloud_firestore.dart";

import 'package:poopmates/constants/Constantcolors.dart';

class LandingService with ChangeNotifier {
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
              children: snapshot.data.docs.map((DocumentSnapshot documentSnapshot) {
                return ListTile(
                  leading: CircleAvatar(
                    backgroundImage: NetworkImage(documentSnapshot.data()["userimage"]),
                  ),
                  subtitle: Text(
                    documentSnapshot.data()["useremail"],
                    style: TextStyle(
                      color: constantColors.greenColor,
                      fontWeight: FontWeight.bold,
                      fontSize: 12
                    )
                  ),
                  title: Text(
                    documentSnapshot.data()["username"],
                    style: TextStyle(
                      color: constantColors.greenColor,
                      fontWeight: FontWeight.bold
                    )
                  ),
                  trailing: IconButton(
                    icon: Icon(Icons.delete),
                    onPressed: () {},
                  ),
                );
              }).toList()
            );
          }
        }
      ),
    );
  }
}
