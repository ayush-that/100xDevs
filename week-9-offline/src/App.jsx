import "./App.css";

function PostComponent() {
  return (
    <div>
      <div
        style={{
          width: 800,
          backgroundColor: "black",
          display: "flex",
          borderRadius: 10,
        }}
      >
        <img
          src={
            "https://pbs.twimg.com/profile_images/1933139255993274368/bD6Jio_R_400x400.jpg"
          }
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            display: "flex",
            marginLeft: 20,
            marginTop: 20,
          }}
        />
        <div style={{ display: "grid", textAlign: "left", marginLeft: 20 }}>
          <div
            style={{
              fontSize: 32,
              marginTop: 10,
              fontWeight: "bold",
            }}
          >
            Ayush{" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/2048px-Twitter_Verified_Badge.svg.png"
              style={{ height: 32, paddingTop: 6 }}
            />
          </div>
          <div style={{ fontSize: 24, fontWeight: "bold" }}>@shydev69</div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div>
        <h2>Sample Tweet Card</h2>
        <PostComponent />
      </div>
    </>
  );
}

export default App;
