import React from "react"
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native';
import LinearGradient from "react-native-linear-gradient";

function Dashboard(){
    return(
        <View style={{width:"100%", height:"100%"}}>
            <SafeAreaView style= {{backgroundColor: "white",}}>
                <View style={{ height: 50, flexDirection: "row", justifyContent: "space-between"}}>
                  <View style= {{backgroundColor: "white", width: 100, height: 50,left: 5,}}>
                    <Text style={{top : "10%", left: "10%", fontWeight:"bold"}}> Today {'\n'}July 2, 2019</Text>
                  </View>
                  <View style= {{backgroundColor: "#6C9D8E", width: 50, height: 50,right: 10, borderRadius: 25}}/>
                </View>
              </SafeAreaView>
               <View style={{flex: 1,flexDirection: "column"}}>
               <View style={{backgroundColor: "black",flex: 2, height: "100%", flexDirection: "row"}}>                 
                 
                  <View style= {{backgroundColor: "white", flex: 1,width: "100%", height: "100%",}}/>
                 
                  <View style= {{backgroundColor: "white", flex: 8,flexDirection: "column",width: "100%", height: "100%",}}>
                    <View style= {{backgroundColor: "white", flex: 1,width: "100%", height: "100%",justifyContent: "center", alignItems: "center",}}>
                    <Text style={{fontWeight:"bold", marginBottom: 5,fontSize : 17}}> Hi Mise,</Text>
                    <Text style={{fontSize : 17}}> Time to work towards your goal!</Text>
                    </View>
                    <View style= {{backgroundColor: "white", flex: 2,width: "100%", height: "100%",justifyContent: "center", alignItems: "center"}}>
                      <View style={{ width: 266, height: 266,borderRadius: 133,borderWidth : 30, borderBottomColor:"#F8B18B",shadowOffset:{width:0,height:0},shadowColor:"black", shadowOpacity: 0.35, shadowRadius: 7,borderLeftColor:"#F7A578",borderRightColor:"white",borderTopColor:"orange",justifyContent: "center", alignItems: "center"}}>
                         <Text style={{fontWeight:"bold", marginBottom: 5, fontSize: 30,}}> 7,000</Text>
                        <Text style={{opacity: 0.5}}> out of 10,000 steps</Text>
                      </View>
                     
                    </View>
                    <View style= {{flex: 1, flexDirection:"row",width: "100%", height: "100%", right: -50}}>
                      <View style={{backgroundColor: "transparent", flex: 1,flexDirection: "row", alignItems:"center", justifyContent:"center",left: -50}}>
                        <Image source={require("/Users/ibidaposmac/Practice/PrototypeOne/app/assets/runningman.png")} style={{width:15, height:30}}/>
                        <Text style={{left: 10,fontSize: 10, fontWeight:"bold"}}>Distance {"\n"} 4.5 km</Text>
                      </View>  
                      <View style={{backgroundColor: "transparent", flex: 1,flexDirection: "row", alignItems:"center", justifyContent:"center", left: -60}}>
                        <Image source={require("/Users/ibidaposmac/Practice/PrototypeOne/app/assets/flames.png")} style={{width:20, height:35}}/>
                        <Text style={{left: 10, fontSize: 10,fontWeight:"bold"}}>Burned calories {"\n"}    200 kcal</Text>
                      </View>  
                    </View>                 
                  </View>

                  <View style= {{backgroundColor: "white", flex: 1,width: "100%", height: "100%",}}/>
              
                </View>

                <View style={{flex: 1, height: "100%", flexDirection: "row"}}>
                  <View style= {{ flex: 1,width: "100%", height: "100%",}}/>
                 
                  <View style= {{ flex: 10, flexDirection: "column", alignItems:"center", justifyContent: "space-between",width: "100%", height: "100%",}}>
                    <Text style={{fontWeight: "bold"}}>Activity Sign Up</Text>
                    <View style={{width:"100%", height:"45%",flexDirection:"row", top : 5,shadowOffset:{width:-1,height:5},shadowColor:"black", shadowOpacity: 0.2, shadowRadius: 10}}>
                      <View style={{backgroundColor:"#FFF0EB", flex: 1,borderTopLeftRadius : 15,borderBottomLeftRadius : 15, alignItems:"center", justifyContent:"center"}}>
                      <Text style={{fontSize: 14,fontWeight: "bold"}}> Zumba classes</Text>
                      <Text style={{fontSize: 8, top : 5}}> Time: 8:00am - 9:00am</Text>
                      <Text style={{fontSize: 7,top : 10}}> Instructor: Mr Speckles</Text>
                      </View>
                      <View style={{backgroundColor:"#FFFFFF", flex: 1.7,borderTopRightRadius : 15,borderBottomRightRadius : 15}}>
                          <Image source={require("/Users/ibidaposmac/Practice/PrototypeOne/app/assets/image10.png")} style={{width:"100%", height:"100%"}}/>
                      </View>
                    </View>
                    <View style={{width:"100%", height:"45%",flexDirection:"row", top : 50,shadowOffset:{width:-1,height:5},shadowColor:"black", shadowOpacity: 0.2, shadowRadius: 10}}>
                      <View style={{backgroundColor:"#D29D89", flex: 1,borderTopLeftRadius : 15,borderBottomLeftRadius : 15, alignItems:"center", justifyContent:"center"}}>
                      <Text style={{fontSize: 14,fontWeight: "bold"}}> Aerobics</Text>
                      </View>
                      <View style={{backgroundColor:"#FFFFFF", flex: 1.7,borderTopRightRadius : 15,borderBottomRightRadius : 15}}>
                        <Image source={require("/Users/ibidaposmac/Practice/PrototypeOne/app/assets/image11.png")} style={{width:"100%", height:"100%"}}/>
                      </View>
                    </View>
                  </View>
                 
                  <View style= {{ flex: 1,width: "100%", height: "100%",}}/>
                </View>
               </View>
            
        </View>

    );
}

export default Dashboard;