import Head from "next/head";

export default function updateProfile() {
  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <div>
        <h1>Profile</h1>
      </div>
      <form action="/send-data-here" method="post">
        <label for="userName">Username:</label>
        <input type="text" id="userName" name="userName" />
        <br />
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" />
        <br />
        <label for="password">Password:</label>
        <input type="text" id="password" name="password" />
        <br />
        <label for="kota">Kota:</label>
        <input type="text" id="kota" name="kota" />
        <br />
        <button type="submit">Update</button>
      </form>
    </>
  );
}
