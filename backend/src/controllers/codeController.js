const vm = require("vm");

const executeCode = async (req, res) => {
  try {
    const { code } = req.body;

    let output = "";

    const sandbox = {
      console: {
        log: (...args) => {
          output +=
            args.join(" ") + "\n";
        },
      },
    };

    vm.createContext(sandbox);

    vm.runInContext(
      code,
      sandbox,
      {
        timeout: 3000,
      }
    );

    res.status(200).json({
      success: true,
      output:
        output || "No Output",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      output: error.message,
    });
  }
};

module.exports = {
  executeCode,
};