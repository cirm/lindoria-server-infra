#!/usr/bin/env bash
git clone https://github.com/cirm/lindoria-server-infra.git
cd lindoria-server-infra
curl -sSL https://get.docker.com/gpg | sudo apt-key add -
curl -sSL https://get.docker.com/ | sh
pip install -r requirements.txt
