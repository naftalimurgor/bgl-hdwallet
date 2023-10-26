# bgl-hdwallet

<img src="doc/img/Bitgesell.png" style="height: 60px;"/>

## Installation

```sh
npm i -g bgl-hdwallet # yarn add --global bgl-hdwallet
```

> `bgl-hdwallet` is still in beta.

## Usage

Basic help and `bgl-hdwallet` version can be checked by simply typing the following on a terminal.

```sh
bgl-hdwallet --version
```

```sh
Usage: hdwallet [options] [command]

hdwallet, - create hierarchical deterministic wallets for Bitgesell

Options:
  -V, --version         output the version number
  -h, --help            display help for command

Commands:
  hdwallet <--network>  Generate a hierarchical deterministic wallet (base58 encoded)
  help [command]        display help for command
```

> Note: Always keep your keys safe. Anyone with access to private keys can drain your Wallet.

## Generating a Hd Wallet

To generate Hd Wallet a transaction:

```sh
bgl-hdwallet <wallet> <network>
```

## Contributing

All contributions are highly welcome.

## License

`MIT`
