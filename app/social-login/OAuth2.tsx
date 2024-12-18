import { Button } from "@/components/ui/button";
import {
  GOOGLE_AUTH_URL,
  FACEBOOK_AUTH_URL,
} from "@/app/social-login/constants";
import Image from "next/image";
interface Auth2Props {
  contentGoogle: string;
  contentFacebook: string;
  disabled?: boolean;
}

export function OAuth2({
  contentGoogle,
  contentFacebook,
  disabled,
}: Auth2Props) {
  const handleGoogleLogin = () => {
    const googleUrl = GOOGLE_AUTH_URL;
    window.location.href = googleUrl;
  };

  const handleFacebookLogin = () => {
    const facebookUrl = FACEBOOK_AUTH_URL;
    window.location.href = facebookUrl;
  };

  return (
    <div>
      <div className="mt-4 mb-2">
        <Button
          className="w-full space-x-2"
          size="lg"
          variant="secondary"
          onClick={handleGoogleLogin}
          disabled={disabled}
        >
          <Image src="/icons/google.svg" alt="desc" width={40} height={40} />
          <span>{contentGoogle}</span>
        </Button>
      </div>
      {
        <div>
          <Button
            className="w-full space-x-2"
            size="lg"
            variant="secondary"
            onClick={handleFacebookLogin}
            disabled={disabled}
          >
            <Image src="/icons/facebook.svg" alt="desc" width={40} height={40} />
            <span>{contentFacebook}</span>
          </Button>
        </div>
      }
    </div>
  );
}
