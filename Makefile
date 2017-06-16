.PHONY: build push

REPO=badmuts

# Name of the image
IMAGE=hsleiden-ipsenh-front

# Current branch-commit (example: master-ab01c1z)
CURRENT=`echo $$TRAVIS_BRANCH | cut -d'/' -f 2-`-$$(git rev-parse HEAD | cut -c1-7)

build:
	docker build -t $(REPO)/$(IMAGE):$(CURRENT) -f operations/docker/Dockerfile .

push:
	docker push $(REPO)/$(IMAGE):$(CURRENT)
	if ! [ -z $$TRAVIS_TAG ]; then \
		docker tag $(REPO)/$(IMAGE):$(CURRENT) $(REPO)/$(IMAGE):$$TRAVIS_TAG; \
		docker push $(REPO)/$(IMAGE):$$TRAVIS_TAG; \
	fi;