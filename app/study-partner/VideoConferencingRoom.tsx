import { useEffect, useState } from "react";
import {
  Call,
  CallControls,
  StreamCall,
  StreamTheme,
  StreamVideo,
  SpeakerLayout,
  StreamVideoClient
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useUser } from "@clerk/clerk-react";  // Import useUser from Clerk

// Use a fixed call ID for the room to remain open indefinitely
const callId = "permanent-study-room";
const apiKey = "mmhfdzb5evj2";

const tokenProvider = async (userId: string) => {
  const { token } = await fetch(
    "https://pronto.getstream.io/api/auth/create-token?" +
      new URLSearchParams({
        api_key: apiKey,
        user_id: userId
      })
  ).then((res) => res.json());
  return token as string;
};

export default function VideoConferencingRoom() {
  const { user } = useUser();  // Get the authenticated user from Clerk
  const [client, setClient] = useState<StreamVideoClient>();
  const [call, setCall] = useState<Call>();

  useEffect(() => {
    if (!user) return;  // Ensure user is authenticated

    const myClient = new StreamVideoClient({
      apiKey,
      user: { id: user.id },
      tokenProvider: () => tokenProvider(user.id)
    });
    setClient(myClient);

    return () => {
      myClient.disconnectUser();
      setClient(undefined);
    };
  }, [user]);

  useEffect(() => {
    if (!client) return;
    const myCall = client.call("default", callId);
    myCall.join({ create: true }).catch((err) => {
      console.error(`Failed to join the call`, err);
    });

    setCall(myCall);

    return () => {
      setCall(undefined);
      myCall.leave().catch((err) => {
        console.error(`Failed to leave the call`, err);
      });
    };
  }, [client]);

  if (!client || !call) return null;

  return (
    <StreamVideo client={client}>
      <StreamTheme className="text-white my-theme-overrides">
        <StreamCall call={call}>
          <SpeakerLayout />
          <CallControls />
        </StreamCall>
      </StreamTheme>
    </StreamVideo>
  );
}
