import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function register() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>
      <div style={{ backgroundColor: "#252525" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{ marginTop: 61, marginLeft: 72 }}>
              <Link to={"/"}>
                <h3
                  style={{
                    color: "#FBBC05",
                    fontWeight: "bold",
                    fontSize: "36px",
                  }}
                >
                  Traditional Game
                </h3>
              </Link>
              <div
                className="mx-auto"
                style={{
                  width: 420,
                  height: 579,
                  padding: 40,
                  paddingTop: 111,
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <p
                    style={{
                      fontSize: 24,
                      color: "#FFFFFF",
                      fontWeight: 400,
                    }}
                  >
                    Register
                  </p>
                  <Link to={"/login"}>
                    <p style={{ fontSize: 16, color: "#FBBC05" }}>Login</p>
                  </Link>
                </div>
                <div>
                  <input
                    className="w-100"
                    style={{
                      height: " 48px",
                      margin: "16px 0px",
                      padding: "0px 16px 0px 14px",
                      borderRadius: "4px",
                      border: "1px solid #D0D0D0",
                      fontSize: "14px",
                      color: "#8A8A8A",
                    }}
                    type="text"
                    placeholder="Nama"
                    onChange={(event) => onValueChange(event, "displayName")}
                  />
                  <input
                    className="w-100"
                    style={{
                      height: " 48px",
                      margin: "16px 0px",
                      padding: "0px 16px 0px 14px",
                      borderRadius: "4px",
                      border: "1px solid #D0D0D0",
                      fontSize: "14px",
                      color: "#8A8A8A",
                    }}
                    type="email"
                    placeholder="Masukkan Email"
                    onChange={(event) => onValueChange(event, "email")}
                  />
                  <input
                    className="w-100"
                    style={{
                      height: " 48px",
                      margin: "16px 0px",
                      padding: "0px 16px 0px 14px",
                      borderRadius: "4px",
                      border: "1px solid #D0D0D0",
                      fontSize: "14px",
                      color: "#8A8A8A",
                    }}
                    type="password"
                    placeholder="Kata Sandi"
                    onChange={(event) => onValueChange(event, "password")}
                  />
                  <button
                    className="w-100"
                    style={{
                      marginTop: "36px",
                      height: "46px",
                      background: "#F2C94C",
                      borderRadius: "8px",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      border: "none",
                    }}
                    onClick={onRegisterClick}
                  >
                    REGISTER
                  </button>
                </div>
                <p
                  style={{
                    marginTop: "33px",
                    fontWeight: "400",
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                ></p>
                <div className="d-flex justify-content-between" style={{ marginTop: "34px" }}>
                  <hr
                    style={{
                      display: "block",
                      height: "1px",
                      border: "0",
                      borderTop: "1px solid #D0D0D0",
                      width: "100px",
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="col" style={{ margin: "24px" }}>
              <Image src="/img-login.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
