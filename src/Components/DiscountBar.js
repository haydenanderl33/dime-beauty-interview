import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const DiscountBar = ({progress}) => {
  
  return (
    <>
      <div className="discount-cont">
        <div className="discount-wrapper">
          <div className="discount-header">
            <h3>Add $100 to save 10%</h3>
          </div>
          <div className="discount-box">
            <div className="bundle-savings-cont">
              <div className="bundle-savings-titles">
                <p>Bundle Price</p>
                <p>Your Savings</p>
              </div>
              <div className="savings">
                <p>$0</p>
                <p>$0</p>
              </div>
            </div>
            <div
              style={{
                height: "auto",
                padding: "2rem 8rem 0rem 8rem",
                background: "var(--header-offwhite)",
              }}
            >
              <ProgressBar
                percent={`${progress}`}
                height={25}
                filledBackground="var(--accent-color)"
                unfilledBackground="var(--product-background-bar)"
              >
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>

                <Step>
                  {({ accomplished, index }) => <div className="line"></div>}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => <div className="line"></div>}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => <div className="line"></div>}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
                <Step>
                  {({ accomplished, index }) => <div className="line"></div>}
                </Step>
                <Step>
                  {({ accomplished, index }) => (
                    <div style={{ display: "none" }} className="line"></div>
                  )}
                </Step>
              </ProgressBar>
            </div>
            <div className="discount-percentages">
              <div className="first-half"></div>
              <div className="second-half">
                <p>{``}</p>
                <p>10%</p>
                <p>{``}</p>
                <p>15%</p>
                <p>{``}</p>
                <p>20%</p>
                <p>{``}</p>
                <p>25%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountBar;
