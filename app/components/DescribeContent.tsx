import { Project } from "./constants";

export const DescribeProject = ({project}: {project: Project}) => {

    let result;
    switch (true) {
      case project.name === "MyChefsbase":
        result = (
          <>
          Platform for restaurant owners to optimize their operations.<br/>
          Services include kitchen management, supplier integration, costs analysis, smart menu creation, nutrition analysis, allergene lists <br/>
          Using cloud-based databases <br/>
          <code className="font-mono font-bold">(commercial and private)</code>
        </>
        )
        break;
        case project.name === "EquisMate":
          result = (
            <>
          Private label Yerba Mate products, here is the self-developed webshop.  <br/>
          <code className="font-mono font-bold">(commercial and private)</code>
        </>
          )
          break;
          case project.name === "Courses":
            result = (
              <>
              Keeping knowledge for yourself would be selfish.<br/>
              Learn to code by following my courses!
            </>
            )
            break;
            case project.name === "ChatGPT Recipes":
              result = (
                <>
    Integrate with Chat GPT to ask him for recipes based on your allergene/nutritional wishes<br/>
    (Coming Soon!) <br/>
    <code className="font-mono font-bold">(Publicly available)</code>
    </>
              )
              break;
              case project.name === "Predict Stock Prices":
              result = (
                <>
                Apply Machine Learning to predict Stock Prices<br/>
                  (Coming Soon!) <br/>
                  <code className="font-mono font-bold">(Publicly available)</code>
                </>
              )
              break;
            default:
              result = (
                <>
  Learn how to develop your own Webshop using NextJS, Vercel, Stripe and React <br/>
  <code className="font-mono font-bold">(Publicly available)</code>
  
  </>
              )
    }
    return result
  
  }