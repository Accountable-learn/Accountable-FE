import React from "react";
import {AppLayout} from "src/components/AppLayout/AppLayout";
import Footer from "../../components/AppLayout/Footer";
import {CgProfile} from "react-icons/cg";
import {ProfileData} from "./ProfileData";
import {useAuth} from "src/navigation/Auth/ProvideAuth";

export default function Profile() {

    const {user} = useAuth()
    function handleUpload() {
        console.log("clicked")
    }

    return (
        <AppLayout>
                <div className={"profile-container"}>
                    <div className={"full-w align-center theme-text mb-1"}>
                        <h1>My account</h1>
                    </div>
                    <div className={"flex profile-sub-container"}>
                        <div className={"avatar"}>
                            <CgProfile size={"8rem"}/>
                            <div
                                className={"upload theme-text"}
                                onClick={handleUpload}
                            >
                                Upload photo
                            </div>
                        </div>

                        <div>
                            {ProfileData.map((item, index) =>{
                                return (
                                    <div key={index} className={"flex profile-data"}>
                                        <div className={"profile-title"}>
                                            {item.title}
                                        </div>
                                        <div className={"profile-item"}>
                                            {user[item.data]}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            <Footer/>
        </AppLayout>
    );
}
