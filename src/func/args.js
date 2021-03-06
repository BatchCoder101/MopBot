const Argument = (message, cmd) => {

    return new Promise((resolve, reject) => {

        let args = cmd.args

        if (args.length < 1) return resolve(message)

        let failed = false

        args.forEach((a, i) => {

            let opt = !!a.opt ? !a.opt : true

            if (!message.param[i+1] && !failed && opt) failed = i

        })

        if (failed !== false) {

            message.channel.sendMessage("Missing argument `#"+failed+"` \ntype: "+args[failed].type+"\nDescription: "+args[failed].desc)

            return reject("Missing Argument")

        }

        return resolve(message)

    })

}

module.exports = Argument