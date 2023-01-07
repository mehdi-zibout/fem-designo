import { useForm, SubmitHandler } from "react-hook-form";
import Panel from "../components/shared/Panel";
import { ReactComponent as BgCercle } from "../assets/contact/desktop/bg-pattern-hero-desktop.svg";
import { ReactComponent as BgCercleMobile } from "../assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
import InputText from "../components/shared/InputText";
import Textarea from "../components/shared/Textarea";
import Button from "../components/shared/Button";
import IllustrationCard from "../components/shared/IllustrationCard";
import { ReactComponent as Australia } from "../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as Canada } from "../assets/shared/desktop/illustration-Canada.svg";
import { ReactComponent as UnitedKingdom } from "../assets/shared/desktop/illustration-United-Kingdom.svg";
import { ReactComponent as Leaf } from "../assets/shared/desktop/bg-pattern-leaf.svg";
import { useNavigate } from "react-router";

function Contact() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="">
      <div className="desktop:mb-40 mb-32">
        <Panel
          className={""}
          content={
            <div className="desktop:h-[30rem] tablet:h-[44.44rem] h-[47.75rem] flex  flex-col desktop:flex-row desktop:items-center desktop:justify-center ">
              <div className="h-[40%] desktop:h-full w-full desktop:w-[50%] z-10  flex  justify-center items-center">
                <div className="px-6 tablet:px-16 desktop:px-[5.93rem] ">
                  <h1 className="text-[2rem]  font-medium leading-9 text-center pb-6 tablet:text-h1 tablet:text-left">
                    Contact Us
                  </h1>
                  <p className="text-body text-center tablet:text-left ">
                    Ready to take it to the next level? Let’s talk about your
                    project or idea and find out how we can help your business
                    grow. If you are looking for unique digital experiences
                    that’s relatable to your users, drop us a line.
                  </p>
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full desktop:w-[50%] h-[60%] z-20  desktop:h-full desktop:px-24 desktop:py-14 px-6 tablet:px-16 pb-8 "
              >
                <InputText
                  error={{
                    isError: Boolean(errors.name),
                    message: errors.name?.message || "",
                  }}
                  rhf={register("name", {
                    required: "Can’t be empty",
                    maxLength: {
                      value: 20,
                      message: "Can't have more than 20 letter",
                    },
                    pattern: {
                      value:
                        /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/,
                      message: "Please write a valid name",
                    },
                  })}
                  label={"Name"}
                  className=""
                />
                <InputText
                  error={{
                    isError: Boolean(errors.email),
                    message: errors.email?.message || "",
                  }}
                  rhf={register("email", {
                    required: "Can’t be empty",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Please write a valid email",
                    },
                  })}
                  label={"Email Address"}
                />
                <InputText
                  error={{
                    isError: Boolean(errors.phone),
                    message: errors.phone?.message || "",
                  }}
                  rhf={register("phone", {
                    required: "Can’t be empty",
                    pattern: {
                      value:
                        /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                      message: "Please write a valid phone number",
                    },
                  })}
                  label={"Phone"}
                />
                <Textarea
                  error={{
                    isError: Boolean(errors.message),
                    message: errors.message?.message || "",
                  }}
                  rhf={register("message", { required: "Can’t be empty" })}
                  label={"Your Message"}
                />
                <Button
                  className="mx-auto tablet:mx-0 tablet:ml-auto block w-36 h-14"
                  isDark
                >
                  SUBMIT
                </Button>
              </form>
            </div>
          }
          Pattern={window.innerWidth >= 712 ? BgCercle : BgCercleMobile}
          patternPosition={
            "absolute bottom-[-28%] left-[-40%] tablet:bottom-[16.3%] tablet:left-[-16%] desktop:bottom-[0%] desktop:left-[0%] "
          }
        />
      </div>
      <div className="relative flex justify-between items-center flex-col desktop:flex-row mb-40">
        <IllustrationCard
          isLocation
          title={"canada"}
          Illustration={Canada}
          cerclePosition={"top"}
          className="desktop:mb-0 mb-20 desktop:mr-8  "
        >
          <Button onClick={() => navigate("/locations/#canada")}>
            SEE LOCATION
          </Button>
        </IllustrationCard>

        <IllustrationCard
          isLocation
          title={"australia"}
          Illustration={Australia}
          cerclePosition={"left"}
          className="desktop:mb-0 mb-20 desktop:mr-8  "
        >
          <Button onClick={() => navigate("/locations/#australia")}>
            SEE LOCATION
          </Button>
        </IllustrationCard>
        <IllustrationCard
          isLocation
          title={"united kingdom"}
          Illustration={UnitedKingdom}
          cerclePosition={"bottom"}
          className={""}
          onClick={() => navigate("/locations/#unitedkingdom")}
        >
          <Button className="mx-auto block">SEE LOCATION</Button>
          <Leaf className="absolute right-[-20%]   top-[35%]  -z-10 hidden desktop:block" />
        </IllustrationCard>
      </div>
    </div>
  );
}

export default Contact;

type Inputs = {
  email: string;
  name: string;
  message: string;
  phone: number;
};
