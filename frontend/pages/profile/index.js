import Head from "next/head";
import Image from "next/image";

export default function profile() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
      </Head>
      <div style={{ backgroundColor: "#252525" }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col" style={{ marginTop: 61, marginLeft: 72 }}>
              <Form onSubmit={handleSubmit}>
                <Button className="edit1" onClick={toggleEdit} style={{ border: "none" }}>
                  Edit
                </Button>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Nama</Form.Label>
                  <Form.Control className="edittable" defaultValue={authenticatedUser && authenticatedUser.displayName} onChange={(event) => onValueChange(event, "displayName")} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control className="edittable" defaultValue={authenticatedUser && authenticatedUser.email} onChange={(event) => onValueChange(event, "email")} disabled />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="text-white">Password</Form.Label>
                  <Form.Control type="password" placeholder="Insert password" className="edittable" onChange={(event) => onValueChange(event, "password")} disabled />
                </Form.Group>
                <Button id="submit" variant="primary" type="submit" style={{ background: "#00B4FF" }} hidden>
                  Submit
                </Button>
              </Form>

              <br />
              <h1 className="text-white">SCORE: {scoreFromDoc}</h1>
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
