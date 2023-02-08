import Link from "next/link";
import { Base } from "../components/Base";

export default () => {
  return (
    <Base>
      <div>
        Add new user.
        <br />
        <Link href="/">Go back</Link>
      </div>
    </Base>
  );
};
